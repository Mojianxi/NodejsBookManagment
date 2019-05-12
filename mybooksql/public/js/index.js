$(function () {
	function initList() {
		//渲染列表数据
	$.ajax({
		type:'get',
		url:'/books',
		dataType:'json',
		success:function(data) {
			var html=template('indexTpl',{list:data});
			$('#dataList').html(html);
			//必须在渲染完成之后操作dom
			$('#dataList').find('tr').each(function(index,element) {
				var td=$(element).find('td:eq(5)');
				var id=$(element).find('td:eq(0)').text();
				//绑定编辑图书的单击事件
				td.find('a:eq(0)').click(function() {
					editBook(id);
				});
				//绑定删除图书的单击事件
				td.find('a:eq(1)').click(function() {
					// console.log(2);
					deleteBook(id);
				});
				//绑定添加图书的单击事件
				addBook();
				var form=$('#addBookForm');
				form.get(0).reset();
				form.find('input[type=hidden]').val('');
			});
		}
		});
	}
	initList();

	//编辑图书信息
	function editBook(id) {
		var form=$('#addBookForm');
		//先根据是数据id查询最新数据
		$.ajax({
			type:'get',
			url:'/books/book/'+id,
			dataType:'json',
			success:function(data) {
				//初始化弹窗
				var mark=new MarkBox(600,400,'编辑图书',form.get(0));
				mark.init();
				//填充表单数据
				form.find('input[name=id]').val(data.id);
				form.find('input[name=name]').val(data.name);
				form.find('input[name=author]').val(data.author);
				form.find('input[name=category]').val(data.category);
				form.find('input[name=description]').val(data.description);
				//对表单提交按钮重新绑定单击事件
				form.find('input[type=button]').unbind('click').click(function() {
					//编辑完成数据后提交表单
					$.ajax({
						type:'put',
						url:'/books/book',
						data:form.serialize(),
						dataType:'json',
						success:function (data) {
							if(data.flag=='1'){
								mark.close();
								initList();
							}
						}
					});
				});
			}
		});
	}

	//删除图书信息
	function deleteBook(id) {
		//先根据是数据id查询最新数据
		$.ajax({
			type:'get',
			url:'/books/book/'+id,
			dataType:'json',
			success:function(data) {
				//初始化弹窗
				//对表单提交按钮重新绑定单击事件
					//编辑完成数据后提交表单
					$.ajax({
						type:'delete',
						url:'/books/book/'+id,
						dataType:'json',
						success:function (data) {
							initList();
						}
					});
			}
		});
	}
	function addBook() {
		// body...
		//添加图书信息
		$('#addBookId').click(function() {
			var form=$('#addBookForm');
			var mark=new MarkBox(600,400,'添加图书',form.get(0));
			mark.init();
			form.find('input[type=button]').unbind('click').click(function() {
				$.ajax({
					type:'post',
					url:'/books/book',
					data: form.serialize(),
					dataType:'json',
					success:function(data) {
						if(data.flag=='1'){
							//添加成功后关闭弹窗重新加载数据
							mark.close(); 
							initList();
						}
					}
				});
			})
		});
	}
	
});