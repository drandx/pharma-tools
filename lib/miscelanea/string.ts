
export const capitalize = (string :string) : string => {
    if (string === null || string === undefined) return '';
    return string.toLowerCase().replace(/\b./g, (a) => { return a.toUpperCase(); });
  };
  
  export const cfirst = (string: string) : string => {
    if (string === null || string === undefined) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  export const lower = (string: string) : string => {
    if (string === null || string === undefined) return '';
    return string.toLowerCase();
  };
  
  export const upper = (string: string) : string => {
    if (string === null || string === undefined) return '';
    return string.toUpperCase();
  };
  
  export const cleanLineBreak = (string: string) : string => {
    if (string === null || string === undefined) return '';
    return string.replace(/(\r\n|\n|\r)/gm, ' ');
  };