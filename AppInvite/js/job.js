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
           	},
                {
            	job:'Ruby on Rails开发工程师',

            	duty:[
			'1. 基于Ruby on Rails框架进行云计算管理平台的设计和开发',
			],

            	require:[
                        '1. 熟悉Ruby, Ruby on Rails，有两年及以上Ruby on Rails项目开发经验；',
                        '2. 熟悉HTML, CSS, Javascript，jQuery，JSON等Web相关技术；',
                        '3. 熟悉Git等版本控制工具，Linux操作系统；',
                        '4. 有良好的代码书写和编程习惯、非常强的学习能力，解决问题的能力；',
			'5. 加分条件：云计算等相关工作经验者优先；有大中型WEB网站开发经验者优先; 有自己的blog或github链接；',
			'6. 具有团队合作精神，有责任感，能承受一定的工作压力、保持工作效率。',

                ],
           	},
                {
            	job:'Linux运维工程师',

            	duty:[
			'1. 参与云平台相关的调研、开发和测试',
			'2. 参与云平台的部署和维护；',
			'3. 编写、修订和审核技术支持相关文档和作业指导书。',
		     ],

            	require:[
                        '1. 计算机相关专业;1年以上相关工作经验；',
                        '2. 最少熟悉一种Hypervisor平台（如VMware,KVM等）；',
                        '3. 熟练至少一种脚本语言，熟悉python的优先；',
                        '4. 熟练操作Linux操作系统；',
			'5. 有自动化运维经验，例如使用chef，puppet，ansible等自动运维软件经验的优先；',
			'6. 拥有一定的英语读写听说能力。',
                ],
           	}
        ];

    }]);

			
