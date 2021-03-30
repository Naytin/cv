import React from 'react'
import s from './BurgerButton.module.scss'
import {useTrail, a} from "react-spring";


const BurgerButton = React.memo(({set, open}) => {
    function Trail({ open, children, ...props }) {
        const items = React.Children.toArray(children)
        const trail = useTrail(items.length, {
            config: { mass: 5, tension: 2000, friction: 200 },
            opacity: open ? 1 : 0,
            x: open ? 0 : 20,
            height: open ? 4 : 0,
            from: { opacity: 0, x: 20, height: 0 },
        })
        return (
            <div className="trails-main" {...props}>
                <div>
                    {trail.map(({ x, height, ...rest }, index) => (
                        <a.div
                            key={items[index]}
                            className="trails-text"
                            style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
                            <a.div style={{ height }}>{items[index]}</a.div>
                        </a.div>
                    ))}
                </div>
            </div>
        )
    }

    return (<>
            <div className={s.burgerMenu} >
                <Trail className={s.burger__btn} open={open} onClick={set}>
                    <span className={s.btnElem}></span>
                    <span className={s.btnElem}></span>
                    <span className={s.btnElem}></span>
                </Trail>
            </div>

        </>
    )
})

export default BurgerButton