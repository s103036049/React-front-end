import React, { useState, useEffect } from 'react';
function ScrollToTopButton (){
      const [showButton, setShowButton] = useState(false);

      // 添加滚动事件监听
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 清除事件监听
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 // 返回顶部的函数
 const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

    return (
        <div className=' '>
         {showButton && (
        <button onClick={scrollToTop} 
        className=' btn btn-sm btn-primary '
        style={{
            position: "fixed",
            backgroundColor: "#007bff",
            bottom: 30,
            right: 50,

            color: "#fff",
            padding: "10px"
          }}
                  >
          ^
        </button>
      )}
        </div>

    );
}
 
export default ScrollToTopButton;