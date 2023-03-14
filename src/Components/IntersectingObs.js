import React, { useEffect, useRef, useState } from 'react'

const IntersectingObserver = (props) => {
    const ref = useRef();
    const [intersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting)
        },
        {
        threshold: props.threshold || '0px' ,
        rootMargin: props.rootMargin || 0
        });
        observer.observe(ref.current)
        return (() => observer.unobserve(ref.current))
    }, [])
  return (
    <div>
      {props.children(intersecting)}
    </div>
  )
}

export default IntersectingObserver
