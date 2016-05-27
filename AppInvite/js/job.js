	var zkqy=angular.module('zkqy',[]);

	zkqy.controller('work',['$scope',function($scope){
    	$scope.worksList = [
        	{
            	job:'云计算工程师',

            	duty:[
				'1. 参与云平台相关的调研、开发和测试；',
				'2. 参与云平台的部署和维护；',
				'3. 编写、修订和审核技术支持相关文档和作业指导书。',
            	],

            	require:[
			    '1. 计算机相关专业；',
			    '2. 最少熟悉一种Hypervisor平台（如VMware,KVM等）；',
			    '3. 熟练至少一种脚本语言，熟悉python的优先；',
			    '4. 熟练操作Linux操作系统；',
			    '5. 熟悉OpenStack产品及各个组件优先；',
			    '6. 有自动化运维经验，例如使用chef，puppet，ansible等自动运维软件经验的优先；',
			    '7. 拥有一定的英语读写听说能力。'
                ],

                site:'上海'
           	},
			{
            	job:'前端工程师',

            	duty:[
				'1. 承担Web前端开发任务，负责公司前端产品组件的设计、规划及开发；',
				'2. 利用HTML/CSS/JavaScript等各种Web技术进行产品的界面开发；',
				'3. 整体页面结构及样式层结构的设计、优化。'
				],

            	require:[
                        '1. 两年以上的Web应用开发经验精通Javascript前端开发，熟悉前端类库jQuery，Bootstrap等；熟悉常见web开发框架（React, Angular）中的一种，能快速高效实现各种交互效果',
                        '2. 对OO、MVC等编程思想、软件工程相关概念及流程、敏捷开发概念及流程有一定的理解；',
                        '3. 有独立项目经验的优先，有云平台前端开发经验的优先；',
                        '4. 熟悉bash/python/php中任何一种脚本的优先；',
						'5. 工作认真，负责，对前端开发技术钻研具有强烈兴趣，具有较强的逻辑思维能力，思路清晰。'

                ],

                site:'上海'
           	}
           	
        ];

    }]);

			
