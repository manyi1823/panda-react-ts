import * as React from "react";
import * as rdd from "react-device-detect";

export interface IArrowIconProps {
  color?: string;
  direction?: "left" | "right";
}

export default function ArrowIcon({
  color = "#6EA736",
  direction = "left",
}: IArrowIconProps) {
  return (
    <>
      {rdd.isMobile ? (
        <svg
          width="6"
          height="11"
          viewBox="0 0 6 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.56241 10.2555L0.34991 6.05552C0.29991 6.00552 0.26441 5.95135 0.24341 5.89302C0.22241 5.83468 0.212077 5.77218 0.21241 5.70552C0.21241 5.63885 0.222743 5.57635 0.24341 5.51802C0.264077 5.45968 0.299577 5.40552 0.34991 5.35552L4.56241 1.14302C4.67908 1.02635 4.82491 0.968018 4.99991 0.968018C5.17491 0.968018 5.32491 1.03052 5.44991 1.15552C5.57491 1.28052 5.63741 1.42635 5.63741 1.59302C5.63741 1.75968 5.57491 1.90552 5.44991 2.03052L1.77491 5.70552L5.44991 9.38052C5.56658 9.49718 5.62491 9.64102 5.62491 9.81202C5.62491 9.98302 5.56241 10.1309 5.43741 10.2555C5.31241 10.3805 5.16658 10.443 4.99991 10.443C4.83324 10.443 4.68741 10.3805 4.56241 10.2555Z"
            fill="#6EA736"
          />
        </svg>
      ) : (
        <svg
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.60414 15.5834L0.583305 8.58341C0.499972 8.50008 0.440805 8.4098 0.405805 8.31258C0.370805 8.21536 0.353583 8.11119 0.354139 8.00008C0.354139 7.88897 0.371361 7.7848 0.405805 7.68758C0.44025 7.59036 0.499416 7.50008 0.583305 7.41675L7.60414 0.395915C7.79858 0.20147 8.04164 0.104248 8.33331 0.104248C8.62497 0.104248 8.87497 0.208415 9.0833 0.416748C9.29164 0.625081 9.3958 0.868137 9.3958 1.14591C9.3958 1.42369 9.29164 1.66675 9.0833 1.87508L2.95831 8.00008L9.0833 14.1251C9.27775 14.3195 9.37497 14.5592 9.37497 14.8442C9.37497 15.1292 9.2708 15.3756 9.06247 15.5834C8.85414 15.7917 8.61108 15.8959 8.33331 15.8959C8.05553 15.8959 7.81247 15.7917 7.60414 15.5834Z"
            fill="#6EA736"
          />
        </svg>
      )}
    </>
  );
}