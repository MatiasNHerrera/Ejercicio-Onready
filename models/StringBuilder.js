

module.exports = class StringBuilder
{
    constructor()
    {
        this.string = new String('');
    }

    append(value)
    {
        if(value){
            this.string += value + '\n';
        }
    }

    clear()
    {
        this.string = '';
    }

    show()
    {
        return this.string;
    }
    
}