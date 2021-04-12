import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      back: "Back",
      remove: "Remove",
      cancel: "Cancel",
      delete: "Delete",
      edit: "Edit",
      close: "Close",
      ok: "Ok",
      response: {
        createtask: "Create task",
        applytask: "Apply task",
        createpost: "Post",
        moments: "Moments",
        talks: "Talks",
        home: "Home",
        one_ten: "1-10",
        ten_thirty: "10-30",
        thirty_fifty: "30-50",
        fifty_hundred: "50-100",
        unlimited: "Unlimited",
        one: "One level",
        two: "Two level",
        three: "Three level",
        four: "Four level",
        three_days: "Three days",
        one_week: "One week",
        half_mouth: "Half mouth",
        one_mouth: "One mouth",
        two_mouth: "Two mouth",
        half_year: "Half year",
        one_year: "One year",
        over_year: "Over a year",
        all: "Anyone can apply",
        invite_only: "Invite only",
        response: "Response",
        disaster: "Disaster",
        menu: "Menu",
        about: "About",
        base_info: "Base Information",
        groups: "Groups",
        jobs: "Jobs",
        members: "Members",
        timeline: "Timeline",
        resources: "Resources",
        discussion: "Discussion",
        settings: "Settings",
        history: "History Responses",
        more: "More",
        tasks: "Tasks",
        unfinished: "Unfinished",
        finished: "Finished",
        add_group: "Add Group",
        edit: "Edit",
        delete: "Delete",
        remove: "Remove",
        response_name: "Response Name",
        organizer: "Organizer:",
        disaster_type: "Disaster Type",
        response_level: "Response Level",
        begin_time: "Begin Time",
        needs_time: "Needs Time",
        end_time: "End Time",
        join_mode: "Join Mode",
        need_people: "Need People",
        statement: "statement",
        all_groups: "All Groups",
        all_jobs: "All Jobs",
        add_groups: "Add Groups",
        add_jobs: "Add Jobs",
        cancel: "Cancel",
        confirm: "confirm",
        filter: "Filter",
        clear: "Clear",
        invite: "Invite",
        add_event: "Add Event",
        create_task: "Create Task",
        task_detail: "Task Detail",
        task_name: "Task Name",
        task_creator: "Creator",
        task_principal: "Pincipal",
        task_content: "Content",
        task_resources: "Resources",
        task_tool: "Tools",
        task_talk: "Talk",
        task_recipient: "Recipients",
        task_submit: "Task Submit",
        apply_list: "Apply List",
        receive: "Receive",
        notice_me_new_task: "Notify me of new tasks",
        end_response: "End response",
        end_confirm: "Are you sure to end?",
        end_message: "All tasks in progress will end",
        okay: "Okay",
        launch_response: "Launch",
        applied: "Applied",
        success: "Passed",
        fail: "Did not pass"
      },
      library: {
        library: "Library",
        sort: "Sort",
        all_disaster_types: "All Disasters",
        all_resource_types: "All Types",
        meteoro_hydro: "Meteoro&Hydro",
        geological: "Geological",
        marine: "Marine",
        biological: "Biological",
        ecological: "Ecological",
        others: "Others",
        history: "History",
        more: "More",
        recent: "Recent",
        topic: "Topics",
        video: "Videos",
        audio: "Audio",
        article: "Articles",
        picture: "Picture",
        book: "Books",
        disaster: "Disaster",
        brief_report: "Brief Report",
        doc: "Doc",
        pdf: "PDF",
        excel: "Excel",
        ppt: "PPT",
        cancel: "Cancel",
        confirm: "confirm",
        filter: "Filter",
        clear: "Clear",
        search: "Search",
        recommend: "Recommend",
        create_topic: "Create Topic",
        base_settings: "Base Settings",
        topic_name: "Topic Title",
        topic_intro: "Topic Introduction",
        choose_picture: "Choose Picture",
        choose_file: "Choose File",
        file_list: "File List",
        upload_link: "Upload Link",
        upload_file: "Upload File",
        step_one: "Step One",
        step_two: "Step Two",
        step_three: "Step Three",
        previous: "Previous",
        next_step: "Next Step",
        complete: "Complete",
        choose_resource: "Choose Resource Type",
        choose_category: "Choose Category",
        upload_link_file: "Upload link or file"
      },
      notice: {
        notice: "Notifications",
        unread: "Unread",
        archive: "Archive",
        system: "System Notification",
        task: "Task Notification",
        group: "Group Notice",
        post: "Post",
        post_notice: "Post Notice",
        to: "To",
        notice_title: "Motice Title",
        notice_content: "Notice Content"
      },
      forum: {
        forum: "Forum",
        question: "#Q&A",
        disaster: "#Disaster",
        zhuoming: "#Zhuoming",
        charity: "#Charity",
        development: "#Development",
        response: "#Response",
        opinion: "#Opinion",
        moments: "#Moments",
        post: "Post",
        comment: "Comment",
        unlabeled: "Unlabeled"
      },
      user: {
        me: "Me",
        user: "User",
        volunteer: "Volunteer",
        developer: "Developer",
        admin: "Admin",
        super_admin: "Super admin",
        profile: "Profile",
        moments: "Moments",
        follow: "Follow",
        bookmarks: "Bookmarks",
        settings: "Settings",
        tasks: "My Tasks",
        unfinished: "In progress",
        finished: "Finished",
        language: "Language",
        followers: "Followers",
        following: "Following",
        back: "Back",
        username: "Username",
        nickname: "Nickname",
        password: "Password",
        wechat: "Wechat",
        shimo: "Shimo",
        phone: "Phone",
        email: "Email",
        role: "Role",
        gender: "Gender",
        location: "Location",
        job: "Job",
        skill: "Skill",
        introduction: "Introduction",
        signin: "Sign",
        wechat_sign: "Sign in with WeChat"
      }
    }
  },
  zh: {
    translation: {
      back: "返回",
      remove: "移除",
      cancel: "取消",
      delete: "删除",
      edit: "编辑",
      close: "关闭",
      ok: "确定",
      response: {
        createtask: "创建任务",
        applytask: "申请任务",
        createpost: "发帖",
        moments: "动态",
        talks: "讨论",
        home: "首页",
        one_ten: "1-10",
        ten_thirty: "10-30",
        thirty_fifty: "30-50",
        fifty_hundred: "50-100",
        unlimited: "不限",
        one: "一级",
        two: "二级",
        three: "三级",
        four: "四级",
        three_days: "三天",
        one_week: "一周",
        half_mouth: "半个月",
        one_mouth: "一个月",
        two_mouth: "两个月",
        half_year: "半年",
        one_year: "一年",
        over_year: "超过一年",
        all: "所有人都可申请加入",
        invite_only: "仅受邀请的人",
        response: "响应",
        menu: "菜单",
        disaster: "灾害",
        about: "关于",
        base_info: "基本信息",
        groups: "分组设置",
        jobs: "岗位设置",
        members: "成员",
        timeline: "时间线",
        resources: "资源",
        discussion: "讨论",
        settings: "设置",
        history: "历史响应",
        more: "更多",
        tasks: "任务",
        unfinished: "未完成",
        finished: "已完成",
        add_group: "添加成员",
        edit: "编辑",
        delete: "删除",
        response_name: "响应名称",
        organizer: "发起人",
        disaster_type: "灾害类型",
        response_level: "响应级别",
        begin_time: "开始时间",
        needs_time: "持续时间",
        end_time: "结束时间",
        join_mode: "加入方式",
        need_people: "需要人数",
        statement: "发起声明",
        all_groups: "所有分组",
        all_jobs: "所有岗位",
        add_groups: "添加分组",
        add_jobs: "添加岗位",
        cancel: "取消",
        confirm: "确定",
        filter: "筛选",
        clear: "清空",
        invite: "邀请",
        add_event: "添加事件",
        create_task: "新建任务",
        task_detail: "任务详情",
        task_name: "任务标题",
        task_creator: "创建人",
        task_principal: "负责人",
        task_content: "任务内容",
        task_resources: "资源",
        task_tool: "工具",
        task_talk: "讨论",
        task_recipient: "领取人",
        task_submit: "提交页面",
        apply_list: "报名列表",
        receive: "领取",
        notice_me_new_task: "有新任务时通知我",
        end_response: "结束响应",
        end_confirm: "确认结束响应？",
        end_message: "正在进行中的所有任务将结束",
        okay: "确定",
        launch_response: "发起响应",
        applied: "申请中",
        success: "已通过",
        fail: "未通过"
      },
      library: {
        library: "资料库",
        sort: "分类",
        all_disaster_types: "所有灾害类型",
        all_resource_types: "所有资源类型",
        disaster: "灾害",
        meteoro_hydro: "气象水文灾害",
        geological: "地质地震灾害",
        marine: "海洋灾害",
        biological: "生物灾害",
        ecological: "生态环境灾害",
        others: "其他灾害",
        history: "历史阅读",
        more: "更多",
        recent: "最新推荐",
        topic: "专题",
        video: "视频",
        audio: "音频",
        article: "文章",
        book: "书籍",
        picture: "图片",
        brief_report: "简报",
        doc: "Doc",
        pdf: "PDF",
        excel: "Excel",
        ppt: "PPT",
        cancel: "取消",
        confirm: "确定",
        filter: "筛选",
        clear: "清空",
        search: "搜索",
        recommend: "推荐资源",
        create_topic: "新建主题",
        base_settings: "基本设置",
        topic_name: "主题名称",
        topic_intro: "主题简介",
        choose_picture: "选择主图",
        choose_file: "选择文件",
        file_list: "文件列表",
        upload_file: "上传文件",
        upload_link: "上传链接",
        step_one: "第一步",
        step_two: "第二步",
        step_three: "第三步",
        previous: "上一步",
        next_step: "下一步",
        complete: "完成",
        choose_resource: "选择资源类型",
        choose_category: "选择分类",
        upload_link_file: "上传链接或文件"
      },
      notice: {
        notice: "通知",
        unread: "未读",
        archive: "已读",
        system: "系统通知",
        task: "任务通知",
        group: "小组通知",
        post: "发布",
        post_notice: "发布通知",
        to: "发布给",
        notice_title: "通知标题",
        notice_content: "通知内容"
      },
      forum: {
        forum: "论坛",
        question: "#提问",
        disaster: "#灾害",
        zhuoming: "#卓明",
        charity: "#公益",
        development: "#开发",
        response: "#响应",
        opinion: "#观点/意见",
        moments: "#此时此刻",
        post: "发贴",
        comment: "评论",
        unlabeled: "未标签"
      },
      user: {
        me: "我的",
        user: "用户",
        volunteer: "志愿者",
        developer: "开发者",
        admin: "管理员",
        super_admin: "0号员工",
        profile: "个人资料",
        tasks: "任务",
        moments: "帖子",
        follow: "关注",
        bookmarks: "收藏",
        settings: "设置",
        unfinished: "正在进行中的任务",
        finished: "已完成的任务",
        language: "语言",
        followers: "关注者",
        following: "正在关注",
        back: "返回",
        username: "用户名",
        nickname: "昵称",
        password: "密码",
        wechat: "微信账号",
        shimo: "石墨账号",
        phone: "手机号",
        email: "邮箱",
        role: "角色",
        gender: "性别",
        location: "所在地",
        job: "职业",
        skill: "专业/技能",
        introduction: "个人介绍",
        sign: "登录",
        wechat_sign: "使用微信账号登录"
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,

  lng: "zh",

  interpolation: {
    escapeValue: false
  }
});

export default i18n;
