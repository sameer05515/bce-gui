/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	// Home
	.when("/", {templateUrl: "partials/home.html"/* , controller: "PshortDescriptionCtrl" */})
	// PshortDescriptions
	.when("/about", {templateUrl: "partials/about.html"/* , controller: "PshortDescriptionCtrl" */})
	.when("/faq", {templateUrl: "partials/faq.html"/* , controller: "PshortDescriptionCtrl" */})
	.when("/pricing", {templateUrl: "partials/pricing.html"/* , controller: "PshortDescriptionCtrl" */})
	.when("/services", {templateUrl: "partials/services.html"/* , controller: "PshortDescriptionCtrl" */})
	.when("/contact", {templateUrl: "partials/contact.html"/* , controller: "PshortDescriptionCtrl" */})


	// links
	.when("/links", {templateUrl: "partials/link-mgmt/links-list.html"/* , controller: "repeatController" */})

	/** ####################################################################################################################### */    

	/**
	 *    INTERVIEW MANAGEMENT ROUTES START
	 *   
	 *   */

	.when("/questions-single-view", {templateUrl: "partials/interview-mgmt/categories/questionsSingleView.html" , controller: "questionsSingleViewController" })
	// categories
	.when("/question-report", {templateUrl: "partials/interview-mgmt/categories/showAllCategories.html", controller: "showAllCategoriesController"})
	.when("/categories-list", {templateUrl: "partials/interview-mgmt/categories/showAllCategories-list.html", controller: "showAllCategoriesController-list"})
	.when("/categories/:id", {templateUrl: "partials/interview-mgmt/categories/showCategory.html", controller: "showCategoryController"})

	// questions    
	.when("/categories/:catID/questions", {templateUrl: "partials/interview-mgmt/questions/showAllQuestions-list.html", controller: "showAllQuestionsController-list"})
	.when("/categories/:catID/questions/:quesID", {templateUrl: "partials/interview-mgmt/questions/showQuestion.html", controller: "showQuestionController"})

	// answers    
	.when("/categories/:catID/questions/:quesID/answers", {templateUrl: "partials/interview-mgmt/answers/showAllAnswers-list.html", controller: "showAllAnswersController-list"})
	.when("/categories/:catID/questions/:quesID/answers/:ansID", {templateUrl: "partials/interview-mgmt/answers/showAnswer.html", controller: "showAnswerController"})

	/**
	 *    INTERVIEW MANAGEMENT ROUTES END
	 *   
	 *   */

	/** ####################################################################################################################### */


	/**
	 *    TOPIC MANAGEMENT ROUTES START
	 *   
	 *   */

	// topics
	.when("/topics", {templateUrl: "partials/topic-mgmt/topics/showAllTopics.html", controller: "showAllTopicsController"})
	.when("/topics-list", {templateUrl: "partials/topic-mgmt/topics/showAllTopics-list.html", controller: "showAllTopicsController-list"})
	.when("/topics-list/:id", {templateUrl: "partials/topic-mgmt/topics/showTopic.html", controller: "showTopicController"})
	.when("/topics/new", {templateUrl: "partials/topic-mgmt/topics/createTopic.html", controller: "createTopicController"})
	.when("/topics/:id", {templateUrl: "partials/topic-mgmt/topics/updateTopic.html" , controller: "updateTopicController"})
	// groups
	.when("/groups", {templateUrl: "partials/topic-mgmt/groups/showAllGroups.html", controller: "showAllGroupsController"})
	.when("/groups-list", {templateUrl: "partials/topic-mgmt/groups/showAllGroups-list.html", controller: "showAllGroupsController-list"})
	.when("/groups-list/:id", {templateUrl: "partials/topic-mgmt/groups/showGroup.html", controller: "showGroupController"})
	.when("/groups/new", {templateUrl: "partials/topic-mgmt/groups/createGroup.html", controller: "createGroupController"})
	.when("/groups/:id", {templateUrl: "partials/topic-mgmt/groups/updateGroup.html" , controller: "updateGroupController"})
	// views
	.when("/views", {templateUrl: "partials/topic-mgmt/views/showAllViews.html", controller: "showAllViewsController"})
	.when("/views-list", {templateUrl: "partials/topic-mgmt/views/showAllViews-list.html", controller: "showAllViewsController-list"})
	.when("/views-list/:id", {templateUrl: "partials/topic-mgmt/views/showView.html", controller: "showViewController"})
	.when("/views/new", {templateUrl: "partials/topic-mgmt/views/createView.html", controller: "createViewController"})
	.when("/views/:id", {templateUrl: "partials/topic-mgmt/views/updateView.html" , controller: "updateViewController"})
	.when("/site-updates", {templateUrl: "partials/topic-mgmt/help/updates.html" , controller: "topicUpdatesController"})


	/**
	 *    TOPIC MANAGEMENT ROUTES END
	 *   
	 *   */
	
	/** ####################################################################################################################### */

	// groups
	/*.when("/groups", {templateUrl: "partials/groups/showAllGroups.html", controller: "showAllGroupsController"})
	.when("/groups-list", {templateUrl: "partials/groups/showAllGroups-list.html", controller: "showAllGroupsController-list"})
	.when("/groups-list/:id", {templateUrl: "partials/groups/showGroup.html", controller: "showGroupController"})
	.when("/groups/new", {templateUrl: "partials/groups/createGroup.html", controller: "createGroupController"})
	.when("/groups/:id", {templateUrl: "partials/groups/updateGroup.html" , controller: "updateGroupController"})*/

	// views
	/*.when("/views", {templateUrl: "partials/views/showAllViews.html", controller: "showAllViewsController"})
	.when("/views-list", {templateUrl: "partials/views/showAllViews-list.html", controller: "showAllViewsController-list"})
	.when("/views-list/:id", {templateUrl: "partials/views/showView.html", controller: "showViewController"})
	.when("/views/new", {templateUrl: "partials/views/createView.html", controller: "createViewController"})
	.when("/views/:id", {templateUrl: "partials/views/updateView.html" , controller: "updateViewController"})
	.when("/site-updates", {templateUrl: "partials/help/updates.html" , controller: "topicUpdatesController"})*/

	// Blog
	.when("/blog", {templateUrl: "partials/blog.html"/* , controller: "BlogCtrl" */})
	.when("/blog/post", {templateUrl: "partials/blog_item.html"/* , controller: "BlogCtrl" */})

	// Vocabulary
	/*.when("/vocabulary/new", {templateUrl: "partials/vocabulary/addWord.html" , controller: "addWordController" })
	.when("/vocabulary/:id", {templateUrl: "partials/vocabulary/updateWord.html" , controller: "updateWordController" })
	.when("/vocabulary", {templateUrl: "partials/vocabulary/showAllWords.html" , controller: "showAllWordsController" })*/
	
	/** ####################################################################################################################### */
    
    /**
	 *    VOCABULARY MANAGEMENT ROUTES START
	 *   
	 *   */
	
	// Vocabulary
    .when("/vocabulary/new", {templateUrl: "partials/vocabulary/addWord.html" , controller: "addWordController" })
    .when("/vocabulary/:id", {templateUrl: "partials/vocabulary/updateWord.html" , controller: "updateWordController" })
    .when("/vocabulary", {templateUrl: "partials/vocabulary/showAllWords.html" , controller: "showAllWordsController" })
    .when("/multipleSectionController",{templateUrl: "partials/topics/multipleSectionController.html", controller: "multipleSectionController"})
    
    /**
	 *    VOCABULARY MANAGEMENT ROUTES END
	 *   
	 *   */
    
    
    /** ####################################################################################################################### */
    
    /**
	 *    TASK MANAGEMENT ROUTES START
	 *   
	 *   */
    
    // Tasks
    .when("/tasks/new", {templateUrl: "partials/task-mgmt/tasks/createTask.html" , controller: "createTaskController" })
    .when("/tasks/:id", {templateUrl: "partials/task-mgmt/tasks/updateTask.html" , controller: "updateTaskController" })
    .when("/tasks-list", {templateUrl: "partials/task-mgmt/tasks/showAllTasks-list.html" , controller: "showAllTasksController-list" })
    .when("/tasks-list/:id", {templateUrl: "partials/task-mgmt/tasks/showTask.html", controller: "showTaskController"})
    
    /**
	 *    TASK MANAGEMENT ROUTES END
	 *   
	 *   */
	
	/** ####################################################################################################################### */
	

	// else 404
	.otherwise("/404", {templateUrl: "../../partials/404.html"/* , controller: "PshortDescriptionCtrl" */});
}]);