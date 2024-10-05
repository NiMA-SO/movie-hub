import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

interface ImdbRateProps {
  rating: number; // نوع rating مشخص شده است
  ratingCount?: number;
  imdbId?: string;
  blur: boolean;
}

const ImdbRate: React.FC<ImdbRateProps> = ({ rating, ratingCount, imdbId, blur }) => {
  const percentage = (rating / 10) * 100; // تبدیل امتیاز به درصد
  const data = [
    { name: "Completed", value: percentage },
    { name: "Remaining", value: 100 - percentage },
  ];

  const [isDarkMode, setIsDarkMode] = useState(
    document.querySelector("html")?.classList.contains("dark")
  );

  useEffect(() => {
    const htmlElement = document.querySelector("html");

    // تابع برای چک کردن تغییرات دارک مود
    const checkDarkMode = () => {
      setIsDarkMode(htmlElement?.classList.contains("dark"));
    };

    // استفاده از MutationObserver برای گوش کردن به تغییرات کلاس‌های HTML
    const observer = new MutationObserver(checkDarkMode);
    if (htmlElement) {
      observer.observe(htmlElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    // پاک کردن Observer در هنگام unmount کامپوننت
    return () => {
      if (htmlElement) {
        observer.disconnect();
      }
    };
  }, []);

  const COLORS = [
    isDarkMode ? "#ff9500" : "#ff3b30",
    isDarkMode ? "#ffd580" : "#f28b82",
  ]; // رنگ بخش‌های نمودار



  const formatNumber = (num : number) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + "b"; // اگر عدد به میلیارد برسد
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "m"; // اگر عدد به میلیون برسد
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k"; // اگر عدد به هزار برسد
    }
    return num; // برای اعداد کمتر از 1000، عدد به همان شکل نمایش داده شود
  };



  return (
    <div
      style={{ width: 60, height: 60, position: "relative" }}
      className="flex justify-center mx-auto z-20 cursor-pointer"
      onClick={(e) => {
        e.preventDefault()
        location.href = imdbId
        ? `https://www.imdb.com/title/${imdbId}`
        : "#"
      }}
    >
      <PieChart width={60} height={60}>
        <Pie
          data={data}
          innerRadius={25}
          outerRadius={30}
          startAngle={90}
          endAngle={-270}
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              stroke="none"
              className="mx-auto"
              data-value={entry.value} 
            />
          ))}
        </Pie>
      </PieChart>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          flexDirection: "column",
          fontSize: "12px",
        }}
        className={`${!blur ? 'text-[#333333] dark:text-[#f2f2f7]' : 'text-[#f2f2f7]'}`}
      >
        <span className="border-b-2 border-[#e5e5e5] dark:border-[#3a3a3c] pb-[1px]">
          {rating}
        </span>
       {ratingCount && <span>{formatNumber(ratingCount)} V</span>}
      </div>
    </div>
  );
};

// مقدار پیش‌فرض برای rating
// ImdbRate.defaultProps = {
//   rating: 0,
// };

export default ImdbRate;
