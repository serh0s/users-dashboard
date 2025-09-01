import { useEffect, useState } from 'react';
import cn from '../helpers/class-names';
import { useDebouncedValue } from '@mantine/hooks';


type Props = {
    placeholder?: string,
    onChange: (value: string) => void
}

export default function Search({ placeholder, onChange }: Props) {
    const [inputValue, setInputValue] = useState<string>('');
    const [debounced] = useDebouncedValue(inputValue, 300);

    useEffect(() => {
        onChange(debounced);
    }, [debounced, onChange]);

    return (
        <div className="search">
            <input
                type="text"
                value={ inputValue }
                placeholder={ placeholder }
                className="search-input "
                onChange={ e => setInputValue(e.target.value) }
            />

            <button
                className={
                    cn(
                        'search-clear',
                        { 'is-visible': inputValue !== '' }
                    )
                }
                aria-label="Clear search"
                onClick={ () => setInputValue('') }
            >
                <span className="sr-only">Clear</span>
            </button>
        </div>
    )
}