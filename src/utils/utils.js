
export default{
    // 传过来时间戳, 获取最新的指定的时间格式
    formateDate(time){
        if(!time){
            return '';
        }
        let date = new Date(time);
        return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    }
}