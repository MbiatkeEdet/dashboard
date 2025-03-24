import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function CryptoSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cryptos, setCryptos] = useState([]);
  const [filteredCryptos, setFilteredCryptos] = useState([]);
  const [isSearching, setIsSearching] = useState(false); // Track if the user is typing

  // Fetch cryptocurrency data on component mount
  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        const data = await response.json();
        setCryptos(data);
      } catch (error) {
        console.error("Error fetching cryptocurrencies:", error);
      }
    };

    fetchCryptos();
  }, []);

  // Filter cryptocurrencies based on search query
  useEffect(() => {
    if (searchQuery) {
      setIsSearching(true); // User is typing
      const filtered = cryptos.filter(
        (crypto) =>
          crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCryptos(filtered);
    } else {
      setIsSearching(false); // User cleared the input
      setFilteredCryptos([]); // Clear the filtered list
    }
  }, [searchQuery, cryptos]);

  return (
    <div>
      {/* Search Bar */}
      <form className="relative hidden md:flex">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search cryptocurrencies..."
          className="w-64 rounded-lg bg-background pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>

      {/* Display Filtered Cryptos */}
      {isSearching && ( // Only show the list if the user is typing
        <div className="mt-4 max-h-64 overflow-y-auto border rounded-lg shadow-sm">
          {filteredCryptos.length > 0 ? (
            filteredCryptos.map((crypto) => (
              <div
                key={crypto.id}
                className="p-2 border-b hover:bg-gray-100 cursor-pointer"
              >
                <span className="font-medium">{crypto.name}</span> (
                <span className="text-sm text-muted-foreground">
                  {crypto.symbol}
                </span>
                )
              </div>
            ))
          ) : (
            <div className="p-2 text-muted-foreground">No results found.</div>
          )}
        </div>
      )}
    </div>
  );
}