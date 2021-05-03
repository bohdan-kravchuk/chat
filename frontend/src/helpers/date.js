export const toLocaleTime = (date) => {
  return new Date(date).toLocaleTimeString('en-GB', {
    hour: 'numeric',
    hour12: true,
    minute: '2-digit',
  });
};
