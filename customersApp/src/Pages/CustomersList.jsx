import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { generateCustomers } from "../utils/dataGenerator";

import Header from "../components/Header";
import TitleSection from "../components/TitleSection";
import SearchBar from "../components/SearchBar";
import FilterButton from "../components/FilterButton";
import TableHeader from "../components/TableHeader";
import TableRow from "../components/TableRow";
import LoadingIndicator from "../components/LoadingIndicator";


import "../styles/customer.css"

const CustomersList = () => {
  const [allCustomers] = useState(() => generateCustomers(1000000));
  const [filteredCustomers, setFilteredCustomers] = useState(allCustomers);
  const [displayedCustomers, setDisplayedCustomers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [showFilters, setShowFilters] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const ROWS_PER_PAGE = 30;
  const scrollContainerRef = useRef(null);
  const searchTimeoutRef = useRef(null);

  // Debounced Search
  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);

    searchTimeoutRef.current = setTimeout(() => {
      if (!query.trim()) {
        setFilteredCustomers(allCustomers);
      } else {
        const lowerQuery = query.toLowerCase();
        setFilteredCustomers(allCustomers.filter(customer =>
          customer.name.toLowerCase().includes(lowerQuery) ||
          customer.email.toLowerCase().includes(lowerQuery) ||
          customer.phone.includes(lowerQuery)
        ));
      }
      setPage(1);
    }, 250);
  }, [allCustomers]);

  // Sorting
  const handleSort = useCallback((key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') direction = 'desc';
    setSortConfig({ key, direction });
  }, [sortConfig]);

  const sortedCustomers = useMemo(() => {
    if (!sortConfig.key) return filteredCustomers;
    const sorted = [...filteredCustomers].sort((a, b) => {
      let aVal = a[sortConfig.key], bVal = b[sortConfig.key];
      if (sortConfig.key === "lastMessageAt") {
        aVal = new Date(aVal).getTime();
        bVal = new Date(bVal).getTime();
      }
      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [filteredCustomers, sortConfig]);

  // Pagination
  useEffect(() => {
    setDisplayedCustomers(sortedCustomers.slice(0, page * ROWS_PER_PAGE));
  }, [sortedCustomers, page]);

  // Infinite scroll
  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container || isLoading) return;
    const { scrollTop, scrollHeight, clientHeight } = container;
    if (scrollHeight - scrollTop - clientHeight < 200) {
      if (page * ROWS_PER_PAGE < sortedCustomers.length) {
        setIsLoading(true);
        setTimeout(() => {
          setPage(prev => prev + 1);
          setIsLoading(false);
        }, 100);
      }
    }
  }, [page, sortedCustomers.length, isLoading]);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString("en-US", {
      month: "long", day: "numeric", year: "numeric",
      hour: "numeric", minute: "2-digit", hour12: true
    });
  };

  return (
    <div className="container">
      <Header />
      <TitleSection count={allCustomers.length} />
    <div class="horizontal-line"></div>
      <div className="toolbar">
        <SearchBar value={searchQuery} onChange={handleSearch} />
        <FilterButton showFilters={showFilters} onToggle={() => setShowFilters(!showFilters)} />
      </div>
      <div ref={scrollContainerRef} onScroll={handleScroll} className="table-container">
        <table className="table">
          <TableHeader sortConfig={sortConfig} onSort={handleSort} />
          <tbody>
            {displayedCustomers.map(c => <TableRow key={c.id} customer={c} formatDate={formatDate} />)}
          </tbody>
        </table>
        {isLoading && <LoadingIndicator />}
        {displayedCustomers.length === 0 && <div className="no-results">No customers found</div>}
      </div>

    </div>
  );
};

export default CustomersList;
