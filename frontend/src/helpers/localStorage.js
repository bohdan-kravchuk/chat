export const setCurrentUser = (userName) => {
  localStorage.setItem('userName', userName);
};

export const getCurrentUser = () => {
  return localStorage.getItem('userName');
};
