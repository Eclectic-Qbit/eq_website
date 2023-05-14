export function P1({ className, children }) {
  const props = className ? className : "";
  return (
    <p
      className={`${props} text-[1rem] 2xl:text-[1.5rem] xl:text-[1rem] lg:text-[1rem] sm:text-[1rem] xs:text-[1rem]  leading-none transition-all duration-300 ease-in`}
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
