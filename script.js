//for links 
// if you want to modify the url you can change the url 
        function shareLink() {
            if(navigator.share){
                navigator.share({
                    title: "Sharing Link",
                    text: "Here is the link what you asked",
                    url:"https://www.youtube.com/watch?v=LF4V-9Co2KQ"
                })
            }
        }

        //getting images from chrome with url 
        
        async function shareFetch(){
            let img = await fetch('https://images.pexels.com/photos/22147574/pexels-photo-22147574/free-photo-of-two-girls-riding-bicycles-and-a-dog-running-on-a-countryside-road.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load1')
            let file = await img.blob()    //blob is use to change the img into a binary form, if you send img directly without converting into binary it will give you error
            file = new File([file], 'nature.jpg', {type:'image/jpeg'})
            if(navigator.share){
                navigator.share({
                    title: "Siblings",
                    text: "Enjoying their time",
                    files: [file]
                })
            }
        }

        //for images
        let img = document.getElementById('files')
        async function shareImage() {
            let file = img.files
            if(navigator.share){
                navigator.share({
                    title: "Demanded file",
                    text: "This is the file what you asked",
                    files:file
                })
            }
        }