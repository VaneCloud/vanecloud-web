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
           	}
           	
        ];

    }]);

			
