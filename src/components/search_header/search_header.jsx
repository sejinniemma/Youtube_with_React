import React, { useRef ,memo} from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo(
    ({ onSearch,home }) => {
        const inputRef = useRef();
    
        const handleSearch = () => {
            const value = inputRef.current.value;
            onSearch(value);
            inputRef.current.value='';
        }
    
        const onClick = () => {
            handleSearch()
        }
    
        const onKeyPress = (event) => {
            if(event.key === 'Enter'){
                handleSearch()
            }
        }

      
        return (
            <header className={styles.header}>
                <div className={styles.logo} onClick={home}>
                <img className={styles.img} src="/images/logo.png" alt="logo" />
                <h1 className={styles.title}>Youtube</h1>
                </div>
                <input ref={inputRef} className={styles.input} type="search" placeholder='Search...' onKeyPress={onKeyPress}/>
                <button className={styles.button} type='submit' onClick={onClick}>
                    <img className={styles.buttonImg} src="/images/search.png" alt="search" />
                </button>
            </header>
        )
    }
)


export default SearchHeader;