$(function(){


    // function findAndAdd(obj,addobj){
    //     if(Array.isArray(obj)){
    //         for(let i in obj){
    //             findAndAdd(obj[i],addobj);
    //         }
    //     }else{
    //         if(!obj.hasOwnProperty('children')){
    //             obj.children=[];
    //         }
            
    //         if(obj.children.length!=0){
    //             for(let i in obj.children){
    //                 findAndAdd(obj.children[i],addobj);
    //             }
    //         }
    //         for(let i in addobj.tag){
    //             if($.trim(obj.name)==$.trim(addobj.tag[i])){
    //                 obj.children.push({
    //                     name:addobj.name
    //                 });
    //             }
    //         }
    //     }

    // }

    function findAndAdd(obj,addobj){
        if(Array.isArray(obj)){
            for(let i in obj){
                findAndAdd(obj[i],addobj);
            }
        }else{
            if(!obj.hasOwnProperty('childrenData')){
                obj.childrenData=[];
            }
            if(!obj.hasOwnProperty('children')){
                obj.children=[];

            }else{
                if(obj.children.length!=0){
                    for(let i in obj.children){
                        findAndAdd(obj.children[i],addobj);
                    }
                }
                for(let i in addobj.tag){
                    if($.trim(obj.name)==$.trim(addobj.tag[i])){
                        obj.childrenData.push({
                            name:addobj.name
                        });
                    }
                }
            }
        }

    }
    function copyChild(obj){
        if(Array.isArray(obj)){
            for(let i in obj){
                copyChild(obj[i]);
            }
        }else{
 

                if(obj.children.length!=0){
                    for(let i in obj.children){
                        copyChild(obj.children[i]);
                    }
                }
                for(let i in obj.childrenData){
                    obj.children.push(obj.childrenData[i]);
                //    console.log(obj.childrenData[i]);
                }
            
        }

    }
    for(i in gg.myprojects){
        findAndAdd(gg.mytags,gg.myprojects[i]);
    }
    copyChild(gg.mytags);
    console.log(JSON.stringify(gg.mytags));
	$.fn.zTree.init($("#treeDemo"), setting, gg.mytags);

})
