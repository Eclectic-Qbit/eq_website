export function P1({ className, children }) {
  const props = className ? className : "";
  return (
    <p
      className={`${props} text-[1.5rem] 2xl:text-[1.5rem] xl:text-[1.5rem] lg:text-[1.5rem] sm:text-[1.5rem] xs:text-[1.5rem]  leading-none transition-all duration-300 ease-in`}
    >
      {children}
    </p>
  );
}

export function P2({ className, children }) {
  const props = className ? className : "";
  return (
    <p
      className={`${props} text-[1.25rem] 2xl:text-[1.25rem] xl:text-[1.25rem] lg:text-[1.25rem] sm:text-[1.25rem] xs:text-[1.25rem] leading-none transition-all duration-300 ease-in`}
    >
      {children}
    </p>
  );
}
