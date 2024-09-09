import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import { Inicio, Styles } from './pages';

export default function App() {
    return (
        <div className='w-screen flex max-h-[100vh] bg-primary overflow-clip'>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Layout>
                                <Inicio />
                            </Layout>
                        }
                    />
                    <Route
                        path="/styles"
                        element={
                            <Layout>
                                <Styles />
                            </Layout>
                        }
                    />
                </Routes>
            </Router>
        </div>
    )
}
