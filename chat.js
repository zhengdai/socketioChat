define('chat',['avalon','css!./css/bootstrap.min.css','css!./css/chat.css'],function(avalon, bootstrap,chatcss){

	var widget = avalon.ui['chat'] = function(element, data, vmodels) {
		 var options = data['chat'+'Options'];
		 var vmodel  = avalon.define(data['chat'+'Id'],function(vm){
			   		//联系人组
					vm.contactUsers=[];
					vm.currentUser={
								id : 12,
								name:'我' , 
								photo:'./images/avatar-female.jpg'
							};
					vm.currentPartner={};
					vm.chatContents=[];
					vm.tempinputs = '';
					avalon.mix(vm, options);
					//初始化组件的界面，最好定义此方法，让框架对它进行自动化配置
	                vm.$init = function(callback) {
						//调用初始化方法
						vm.initData();
						//element.innerHTML =  windownHTML;
						callback();
                   }
				   //清空构成UI的所有节点，最好定义此方法，让框架对它进行自动化销毁
                   vm.$remove = function() {
                        element.innerHTML =  ""
                   }
				   vm.selectPartner = function(user){
						vm.currentPartner=user;
						vm.showchatContents(user);
				   }
				   vm.showchatContents = function(user){
						avalon.each(user.unread ,function(index,item){
							item.user = user;
							item.partner = vm.currentUser;
							user.readed.push(item);
						});
						user.unread.clear();
						vm.chatContents = [].concat(user.readed);
				   }
				   vm.initData =  function(){
						avalon.each([1,2,3,4,5,6,7,8,9,10,11],function(index ,item){
							var user = {
								id : item,
								name:'TestName'+item , 
								photo:'./images/avatar-female.jpg',
								unread : [{id:0,content:'节能'+item , time : new Date()},{id:2,content:'节能1'+item , time : new Date()}],
								readed: []
							}
							vm.contactUsers.push(user);
						});
						vm.currentPartner={id:8 ,name : 'TestName8'};
				   }
				   
				   vm.initSocket = function(){
						i
				   }
				   vm.sentMsg = function(){
						var chatContent = {id:0,user:vm.currentUser, content:vm.tempinputs , time : new Date(),partner :vm.currentPartner};
						vm.chatContents.push(chatContent);
						vm.currentPartner.readed.push(chatContent);
				   }
		   });
		 vmodel.$skipArray=['contactUsers','currentUserid','chatContents','tempinputs'];
		 return vmodel;
	 }
})