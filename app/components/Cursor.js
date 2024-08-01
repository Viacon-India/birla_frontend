import React from "react";
import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    // const container = containerRef.current;

    var cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", function (e) {
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    });
  }, []);

  return (
    <>
      <div class="cursor">
        <div class="inner-cursor"></div>
      </div>
    </>
  );
}
