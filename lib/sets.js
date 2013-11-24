
var sets = function()
{
    this.add = function(set1, set2)
    {
        var result = undefined;
        
        if (set1)
        if (set2)
        {
            result = set1;
            var operated = set2;
            
            if (set2.length > set1.length)
            {
                result = set2;
                operated = set1;
            }
            
            for (var a=0; a<operated.length; a++)
            {
                result.push(operated[a]);
            }
        }
        
        return result;
    };
    
    
    this.subtract = function(set1, set2)
    {
        if (set1)
        if (set2)
        {
            for (var a=0; a<set2.length; a++)
            {
                var index = set1.indexOf(set2[a]);
                
                if (index != -1)
                {
                    set1.splice(index, 1);
                }
            }
        }
        
        return set1;
    };
    
    
    this.intersect = function(set1, set2)
    {
        var result = undefined;
        
        if (set1)
        if (set2)
        {
            result = new Array();
            var operand = set1;
            var operated = set2;
            
            if (set2.length > set1.length)
            {
                operand = set2;
                operated = set1;
            }
            
            for (var a=0; a<operand.length; a++)
            {
                if (operated.indexOf(operand[a]) != -1)
                {
                    result.push(operand[a]);
                }
            }
        }
        
        return result;
    };
    
    
    this.dedup = function(set)
    {
        var result = new Array();
        
        if (set)
        {
            result.push(set[0]);
            
            for (var a=1; a<set.length; a++)
            {
                if (result.indexOf(set[a]) == -1)
                {
                    result.push(set[a]);
                }
            }
        }
        
        return result;
    };
};


module.exports = new sets();

