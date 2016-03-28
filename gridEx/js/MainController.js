angular.module('gridTest').controller('MainController', ['$scope','$http','uiGridConstants', function($scope,$http,uiGridConstants){
	
    $http.get('/gridEx/data.json').then(function success(respObject){
        $scope.griddata = respObject.data.rows;
        $scope.gridTests.data = $scope.griddata;
        $scope.gridTests.enableHorizontalScrollbar = uiGridConstants.scrollbars.NEVER;
    },
    function error(){


    });

var headerCustom =    '<div ng-class="{ \'sortable\': sortable }" style="color:blue;">' +
                      '<div class="ui-grid-vertical-bar">&nbsp;</div>' +
                      '<div class="ui-grid-cell-contents" col-index="renderIndex">' +
                      '<span style="float:right;" ui-grid-visible="col.sort.direction" ng-class="{ \'ui-grid-icon-up-dir\': col.sort.direction == asc, \'ui-grid-icon-down-dir\': col.sort.direction == desc, \'ui-grid-icon-blank\': !col.sort.direction }">' +
                      '&nbsp;' +
                      '</span>' +
                      '</div>' +
                      '<div class="ui-grid-column-menu-button" ng-if="grid.options.enableColumnMenus && !col.isRowHeader  && col.colDef.enableColumnMenu !== false" class="ui-grid-column-menu-button" ng-click="toggleMenu($event)">' +
                      '<i class="ui-grid-icon-angle-down">&nbsp;</i>' +
                      '</div>' +
                      '<div ng-if="filterable" class="ui-grid-filter-container" ng-repeat="colFilter in col.filters">' +
                      '<input type="text" class="ui-grid-filter-input" ng-model="colFilter.term" ng-attr-placeholder="{{col.displayName || \'\'}}" />' +
                      '<div class="ui-grid-filter-button" ng-click="colFilter.term = null">' +
                      '<i class="ui-grid-icon-cancel" ng-show="!!colFilter.term">&nbsp;</i>' + 
                      '</div>' +
                      '</div>' +
                      '</div>';


	$scope.gridTests = {
    	 enableFiltering: true,
         enableRowSelection: true,
         enableRowHeaderSelection: false,
         // enableGrouping: true,
         groupingShowGroupingMenu: false,
         groupingShowAggregationMenu: false,
         multiSelect: false ,
         paginationPageSizes: [25, 50, 75],
         paginationPageSize: 25,     
         columnDefs: [
            {name: "Region",field: "region",width:120},
            {name: "Country",field: "country",width:100},
            {name: "Sector",field: "sector",width:'*'},
            {name: "Industry",field: "industry",width:'*'},
            {name: "Company",field: "company",width:'*'},
            {name: "Ticker",field: "ticker",width:'*'},
            {name: "Model",field: "model",width:'*'},
            {name: "Views",field: "views",width:'*'},
            {name: "Analyst",field: "analyst",width:'*'},
         ],
         rowHeight: 40,
         headerCellTemplate: headerCustom,
    };
}]);
