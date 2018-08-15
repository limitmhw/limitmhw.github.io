$(function(){


    function findAndAdd(obj,addobj){
        if(Array.isArray(obj)){
            for(let i in obj){
                findAndAdd(obj[i],addobj);
            }
        }else{
            if(!obj.hasOwnProperty('children')){
                obj.children=[];
            }
            
            if(obj.children.length!=0){
                for(let i in obj.children){
                    findAndAdd(obj.children[i],addobj);
                }
            }
            for(let i in addobj.tag){
                if($.trim(obj.name)==$.trim(addobj.tag[i])){
                    obj.children.push({
                        name:addobj.name
                    });
                }
            }
        }

    }
    for(i in gg.myprojects){
        findAndAdd(gg.mytags,gg.myprojects[i]);
    }
	$.fn.zTree.init($("#treeDemo"), setting, gg.mytags);

})
