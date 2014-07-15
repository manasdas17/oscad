                    var storageArray =[];
                    var tempArray =[];
                    function writedata() {
                        //console.log(document.getElementById("id1"));
                        tempArray.push({'id':  document.getElementById("id1").value, 'val': document.getElementById("val1").value});
                        //console.log(storage_Array);
                    }
                    function set() {
                        for (var i = 0; i < tempArray.length; i++) {
                            var flag = 1;
                            for (var j = 0; j < storageArray.length; j++) {
                                if (tempArray[i].id == storageArray[j].id) { 
                                    flag = 0;
                                    break;
                                }
                            }
                            if(flag) {
                                storageArray.push(tempArray[i]);
                            }
                        }
                   }

                    function loop(){
                    for(var i=0;i < 5; i++){
                    writedata();
                    set();
                    }
                    console.log(tempArray);
                    console.log(storageArray);
            }

