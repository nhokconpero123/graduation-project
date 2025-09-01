import { useState, useMemo } from 'react';
import { champions } from '../data/champions';
import { Role, Difficulty } from '../types';

export const useChampionFilters = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRoles, setSelectedRoles] = useState<Role[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null);

  const filteredChampions = useMemo(() => {
    return champions
      .filter((champion) => {
        // Search filter
        if (
          searchQuery &&
          !champion.name.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          return false;
        }

        // Role filter
        if (
          selectedRoles.length > 0 &&
          !champion.roles.some((role) => selectedRoles.includes(role))
        ) {
          return false;
        }

        // Difficulty filter
        if (selectedDifficulty && champion.difficulty !== selectedDifficulty) {
          return false;
        }

        return true;
      })
      .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically by name
  }, [searchQuery, selectedRoles, selectedDifficulty]);

  return {
    searchQuery,
    setSearchQuery,
    selectedRoles,
    setSelectedRoles,
    selectedDifficulty,
    setSelectedDifficulty,
    filteredChampions,
  };
};