import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
        key: 'root',
        storage,
    };

    const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
    reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };