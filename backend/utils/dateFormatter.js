function formatDateToGerman(dateString) {
    if (!dateString) return null;
    const date = new Date(dateString);
    if (isNaN(date)) return null;

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
}

function formatDateToISO(germanDateString) {
    if (!germanDateString) return null;

    const parts = germanDateString.split('.');
    if (parts.length !== 3) return null;

    const [day, month, year] = parts;
    return `${year}-${month}-${day}`;
}


function itemsformatDateToGerman(items){
    const formattedItems = items.map(item => ({
        ...item,
        delivery_date: formatDateToGerman(item.delivery_date),
        delivery_note_date: formatDateToGerman(item.delivery_note_date),
        lends_out_at: formatDateToGerman(item.lends_out_at),
        returned_at:formatDateToGerman(item.returned_at)
    }));
  return formattedItems;
}


function singleItemformatDateToGerman(item) {
    return {
        ...item,
        delivery_date: formatDateToGerman(item.delivery_date),
        delivery_note_date: formatDateToGerman(item.delivery_note_date),
        lends_out_at: formatDateToGerman(item.lends_out_at)
    };
    
}

function singleItemformatDateToISO(item) {
    return {
        ...item,
        delivery_date: formatDateToISO(item.delivery_date),
        delivery_note_date: formatDateToISO(item.delivery_note_date),
        lends_out_at: formatDateToISO(item.lends_out_at),
        returned_at: formatDateToISO(item.returned_at)
    };
    
}


module.exports = { formatDateToGerman, formatDateToISO, itemsformatDateToGerman, singleItemformatDateToGerman, singleItemformatDateToISO };