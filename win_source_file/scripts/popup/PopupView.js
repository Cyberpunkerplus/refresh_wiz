'use strict';
var PopupView = {
    changeSubmitDisplayByType : function() {
        var type = $("#submit-type").find("option:selected").text();
        $('#note_submit').html(type);
    },
    showCategoryTreeFromLoading : function(animate_time_ms) {
        $('#category_loading').hide();
        $('#ztree_container').show(animate_time_ms);
    },
    showCategoryLoading : function(msg) {
        var categoryLoading = $('#category_loading');
        categoryLoading.show();
        categoryLoading.find('label').html(msg);
    },
    hideCategoryLoading : function() {
        $('#category_loading').hide();
    },
    showClipFailure : function(msg) {
        var errPageTip = $('#errorpage_tip');
        $('#waiting_div').hide();
        errPageTip.show();
//        $('#errorpage_tip label').html(msg);
        errPageTip.find('label').html(msg);
    },
    showLoginError : function(msg) {
        $('#wiz_login').show();
        $('#wiz_clip_detail').hide();
        $('#div_error_validator').html(msg);
        $('#waiting').hide();
    },
    showWaiting : function(msg) {
        $('#waiting').show();
        $('#waiting-label').html(msg);
        $('#wiz_login').hide();
        $('#wiz_clip_detail').hide();
    },
    showLogin : function() {
        $("#waiting").hide();
        $("#wiz_login").show();
        $('#user_id').focus();
        $("#wiz_clip_detail").hide();
    },
    hideCategoryTreeAfterSelect : function(display, delay_ms) {
        $("#category_info").html(display);
        $("#ztree_container").hide(delay_ms);
    },
    hideCreateDiv : function() {
        $('#waiting_div').hide();
    },
    hideLogoffDiv: function () {
        $('#loginoff_div').hide();
    }
};