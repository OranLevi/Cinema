function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    const truncated = str.slice(0, num) + '...';
    return truncated;
  }

  export { truncateString };
