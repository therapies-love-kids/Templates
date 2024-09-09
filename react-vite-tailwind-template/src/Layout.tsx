import React from 'react';
import { useEffect, useRef, useState } from 'react';
import Scrollbar from 'smooth-scrollbar';
import { IoMenu, IoMoon, IoSunny } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Layout({ children }: any) {
    const scrollbarRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        let scrollbarInstance: Scrollbar;
        
        if (scrollbarRef.current) {
            scrollbarInstance = Scrollbar.init(scrollbarRef.current, {
                plugins: {
                    overscroll: {
                        effect: "bounce",
                    },
                },
            });

            scrollbarInstance.addListener((status) => {
                setScrollY(status.offset.y);
            });
        }
        
        return () => {
            if (scrollbarInstance) {
                scrollbarInstance.destroy();
            }
        };
    }, []);

    return (
        <div>
            <div className={`navbar ${scrollY === 0 ? 'bg-transparent' : 'bg-base-100'} z-20 fixed`}>
                <div className="flex-1">
                    <div className="drawer">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            <label htmlFor="my-drawer" className="btn btn-ghost drawer-button text-xl">
                                <IoMenu />
                            </label>
                            <Link to={"/"} className='btn btn-ghost text-xl'>
                                <img src="/particle.svg" alt="" className='h-2/3' />
                            </Link>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay z-10"></label>
                            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 z-10">
                                <li>
                                    <Link to={"/"} className='text-xl my-5'>
                                        <img src="/logo.svg" alt="" className='w-2/3' />
                                    </Link>
                                </li>
                                <li><Link to={""}>Outros links</Link></li>
                                <div className="divider"></div>
                                <li><Link to={"/styles"}>Estilo</Link></li>
                                <li><Link to={"/"}>Início</Link></li>
                                <div className="divider"></div>
                                <li>
                                    <label className="swap swap-rotate">
                                        {/* this hidden checkbox controls the state */}
                                        <input type="checkbox" className="theme-controller" value="CustomDark" />

                                        {/* sun icon */}
                                        <IoSunny className='swap-on h-8 w-8 fill-current'/>

                                        {/* moon icon */}
                                        <IoMoon className='swap-off h-8 w-8 fill-current'/>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='w-screen h-screen bg-base-200' ref={scrollbarRef}>
                <div>
                    {children}
                    <div className='text-neutral/50 flex justify-between px-8 w-full'>
                        <h6>© 2024 Therapies Love Kids. Todos os direitos reservados.</h6>
                        <h6>Desenvolvido por Pedro Laurenti</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}