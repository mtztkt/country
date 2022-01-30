
export const numberToStringWithSeperator = (number) => {
    return number == null ? '' : number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
