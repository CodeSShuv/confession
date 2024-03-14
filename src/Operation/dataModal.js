
const createModal  = (title,description)=>{
    const date = new Date()
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
   const modal = {
        title:title,
        description:description,
        date: `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`
    }
    return modal;
}
export default  createModal;