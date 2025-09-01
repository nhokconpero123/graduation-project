import { useState, useEffect } from 'react';
import { PatchNote, fetchPatchNotes } from '../services/patchNotesService';

export const usePatchNotes = () => {
  const [patchNotes, setPatchNotes] = useState<PatchNote[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPatchNotes = async () => {
      try {
        setIsLoading(true);
        const notes = await fetchPatchNotes();
        setPatchNotes(notes);
      } catch (err) {
        setError('Failed to load patch notes');
      } finally {
        setIsLoading(false);
      }
    };

    loadPatchNotes();
  }, []);

  return { patchNotes, isLoading, error };
};