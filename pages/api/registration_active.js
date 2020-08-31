

export default (req, res) => {
    res.statusCode = 200
    var today = Date();
    var limit  = Date('2020-08-15');
    if(today > limit){
        res.json({ open: 'false' })
    } else{
        res.json({ open: 'true' })
    }
    
}
