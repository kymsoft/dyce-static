"use client";


interface LogoutButtonProps {
  children?: React.ReactNode;
};

export const LogoutButton = ({
  children
}: LogoutButtonProps) => {
  const onClick = () => {
    // logout();
  };

  return (
    <button onClick={onClick} className="cursor-pointer text-white">
      {children}
    </button>
  );
};