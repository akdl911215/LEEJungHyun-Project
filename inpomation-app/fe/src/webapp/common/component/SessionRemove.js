export const SessionRemove = () => {
  sessionStorage.removeItem("jwtToken");
  sessionStorage.removeItem("username");
  sessionStorage.removeItem("roles");
  sessionStorage.removeItem("userList");
  sessionStorage.removeItem("currentPage");
};
