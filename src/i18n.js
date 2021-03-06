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
        topic: "Topic",
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
        wechat_sign: "Sign in with WeChat",
        en: "English",
      }
    }
  },
  zh: {
    translation: {
      back: "??????",
      remove: "??????",
      cancel: "??????",
      delete: "??????",
      edit: "??????",
      close: "??????",
      ok: "??????",
      response: {
        createtask: "????????????",
        applytask: "????????????",
        createpost: "??????",
        moments: "??????",
        talks: "??????",
        home: "??????",
        one_ten: "1-10",
        ten_thirty: "10-30",
        thirty_fifty: "30-50",
        fifty_hundred: "50-100",
        unlimited: "??????",
        one: "??????",
        two: "??????",
        three: "??????",
        four: "??????",
        three_days: "??????",
        one_week: "??????",
        half_mouth: "?????????",
        one_mouth: "?????????",
        two_mouth: "?????????",
        half_year: "??????",
        one_year: "??????",
        over_year: "????????????",
        all: "???????????????????????????",
        invite_only: "??????????????????",
        response: "??????",
        menu: "??????",
        disaster: "??????",
        about: "??????",
        base_info: "????????????",
        groups: "????????????",
        jobs: "????????????",
        members: "??????",
        timeline: "?????????",
        resources: "??????",
        discussion: "??????",
        settings: "??????",
        history: "????????????",
        more: "??????",
        tasks: "??????",
        unfinished: "?????????",
        finished: "?????????",
        add_group: "????????????",
        edit: "??????",
        delete: "??????",
        response_name: "????????????",
        organizer: "?????????",
        disaster_type: "????????????",
        response_level: "????????????",
        begin_time: "????????????",
        needs_time: "????????????",
        end_time: "????????????",
        join_mode: "????????????",
        need_people: "????????????",
        statement: "????????????",
        all_groups: "????????????",
        all_jobs: "????????????",
        add_groups: "????????????",
        add_jobs: "????????????",
        cancel: "??????",
        confirm: "??????",
        filter: "??????",
        clear: "??????",
        invite: "??????",
        add_event: "????????????",
        create_task: "????????????",
        task_detail: "????????????",
        task_name: "????????????",
        task_creator: "?????????",
        task_principal: "?????????",
        task_content: "????????????",
        task_resources: "??????",
        task_tool: "??????",
        task_talk: "??????",
        task_recipient: "?????????",
        task_submit: "????????????",
        apply_list: "????????????",
        receive: "??????",
        notice_me_new_task: "????????????????????????",
        end_response: "????????????",
        end_confirm: "?????????????????????",
        end_message: "???????????????????????????????????????",
        okay: "??????",
        launch_response: "????????????",
        applied: "?????????",
        success: "?????????",
        fail: "?????????"
      },
      library: {
        library: "?????????",
        sort: "??????",
        all_disaster_types: "??????????????????",
        all_resource_types: "??????????????????",
        disaster: "??????",
        meteoro_hydro: "??????????????????",
        geological: "??????????????????",
        marine: "????????????",
        biological: "????????????",
        ecological: "??????????????????",
        others: "????????????",
        history: "????????????",
        more: "??????",
        recent: "????????????",
        topic: "??????",
        video: "??????",
        audio: "??????",
        article: "??????",
        book: "??????",
        picture: "??????",
        brief_report: "??????",
        doc: "Doc",
        pdf: "PDF",
        excel: "Excel",
        ppt: "PPT",
        cancel: "??????",
        confirm: "??????",
        filter: "??????",
        clear: "??????",
        search: "??????",
        recommend: "????????????",
        create_topic: "????????????",
        base_settings: "????????????",
        topic_name: "????????????",
        topic_intro: "????????????",
        choose_picture: "????????????",
        choose_file: "????????????",
        file_list: "????????????",
        upload_file: "????????????",
        upload_link: "????????????",
        step_one: "?????????",
        step_two: "?????????",
        step_three: "?????????",
        previous: "?????????",
        next_step: "?????????",
        complete: "??????",
        choose_resource: "??????????????????",
        choose_category: "????????????",
        upload_link_file: "?????????????????????"
      },
      notice: {
        notice: "??????",
        unread: "??????",
        archive: "??????",
        system: "????????????",
        task: "????????????",
        group: "????????????",
        post: "??????",
        post_notice: "????????????",
        to: "?????????",
        notice_title: "????????????",
        notice_content: "????????????"
      },
      forum: {
        forum: "??????",
        question: "#??????",
        disaster: "#??????",
        zhuoming: "#??????",
        charity: "#??????",
        development: "#??????",
        response: "#??????",
        opinion: "#??????/??????",
        moments: "#????????????",
        post: "??????",
        comment: "??????",
        unlabeled: "?????????"
      },
      user: {
        me: "??????",
        user: "??????",
        volunteer: "?????????",
        developer: "?????????",
        admin: "?????????",
        super_admin: "0?????????",
        profile: "????????????",
        tasks: "??????",
        moments: "??????",
        follow: "??????",
        bookmarks: "??????",
        settings: "??????",
        unfinished: "????????????????????????",
        finished: "??????????????????",
        language: "??????",
        followers: "?????????",
        following: "????????????",
        back: "??????",
        username: "?????????",
        nickname: "??????",
        password: "??????",
        wechat: "????????????",
        shimo: "????????????",
        phone: "?????????",
        email: "??????",
        role: "??????",
        gender: "??????",
        location: "?????????",
        job: "??????",
        skill: "??????/??????",
        introduction: "????????????",
        sign: "??????",
        wechat_sign: "????????????????????????",
        en: "??????",
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
