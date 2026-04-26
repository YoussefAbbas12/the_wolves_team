import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        achievements: 'Achievements',
        pack: 'The Pack',
        join: 'Join Us'
      },
      hero: {
        title: 'We don\'t build teams. We build ',
        titleHighlight: 'wolves.',
        subtitle: 'Survival of the smartest. Join the elite network of developers, designers, and innovators.',
        joinBtn: 'Join the Pack'
      },
      vision: {
        title: 'Our ',
        titleHighlight: 'Philosophy',
        p1: 'We believe in raw potential and relentless execution.',
        p2: 'Every member is a leader. We don\'t do micromanagement; we trust the pack.',
        p3: 'Innovation is our prey. We hunt for the next big breakthrough every single day.'
      },
      departments: {
        title: 'Our ',
        titleHighlight: 'Divisions',
        hover: 'Hover for details',
        explore: 'Explore Projects'
      },
      achievements: {
        title: 'Our ',
        titleHighlight: 'Legacy',
        subtitle: 'A timeline of our real-world impact, milestones, and victories.',
        stat1: '+50 Achievements',
        stat2: '+20 Awards',
        stat3: '+100 Members',
        like: 'Appreciate',
        share: 'Share',
        comment: 'Comment'
      },
      members: {
        title: 'The ',
        titleHighlight: 'Pack',
        subtitle: 'Meet the elite minds driving the Wolves Team forward.',
        close: 'Close'
      },
      join: {
        title: 'Join the ',
        titleHighlight: 'Pack',
        subtitle: 'Prove your worth. Step into the future.',
        fullname: 'Full Name',
        email: 'Email',
        field: 'Field of Interest',
        reason: 'Why do you want to join?',
        submit: 'Submit Application',
        submitting: 'Submitting...',
        success: 'Application Received',
        successMsg: 'The pack will review your request. Stand by.',
        select: 'Select a division',
        div1: 'Programming',
        div2: 'Cyber Security',
        div3: 'Graphic Design',
        div4: 'Marketing',
        div5: 'Public Speaking'
      },
      footer: {
        rights: '© 2026 Wolves Team. All rights reserved.',
        motto: 'Survival of the smartest.'
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        achievements: 'الإنجازات',
        pack: 'الأعضاء',
        join: 'انضم إلينا'
      },
      hero: {
        title: 'نحن لا نبني فرقاً. نحن نبني ',
        titleHighlight: 'ذئاباً.',
        subtitle: 'البقاء للأذكى. انضم إلى الشبكة النخبوية من المطورين والمصممين والمبتكرين.',
        joinBtn: 'انضم إلى القطيع'
      },
      vision: {
        title: 'فلسفتنا ',
        titleHighlight: 'ورؤيتنا',
        p1: 'نحن نؤمن بالإمكانيات الكامنة والتنفيذ الذي لا يلين.',
        p2: 'كل عضو هو قائد. نحن لا نتبع الإدارة الدقيقة؛ نحن نثق في القطيع.',
        p3: 'الابتكار هو فريستنا. نحن نصطاد الإنجاز الكبير التالي كل يوم.'
      },
      departments: {
        title: 'أقسام ',
        titleHighlight: 'الفريق',
        hover: 'مرر للتفاصيل',
        explore: 'استكشف المشاريع'
      },
      achievements: {
        title: 'إرث ',
        titleHighlight: 'الفريق',
        subtitle: 'خط زمني لتأثيرنا الحقيقي، وإنجازاتنا، وانتصاراتنا.',
        stat1: '+50 إنجاز',
        stat2: '+20 جائزة',
        stat3: '+100 عضو',
        like: 'أعجبني',
        share: 'مشاركة',
        comment: 'تعليق'
      },
      members: {
        title: 'قطيع ',
        titleHighlight: 'الذئاب',
        subtitle: 'تعرف على العقول النخبوية التي تدفع فريق الذئاب إلى الأمام.',
        close: 'إغلاق'
      },
      join: {
        title: 'انضم إلى ',
        titleHighlight: 'القطيع',
        subtitle: 'أثبت جدارتك. خطُ نحو المستقبل.',
        fullname: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        field: 'مجال الاهتمام',
        reason: 'لماذا تريد الانضمام؟',
        submit: 'إرسال الطلب',
        submitting: 'جاري الإرسال...',
        success: 'تم استلام طلبك',
        successMsg: 'سيقوم القطيع بمراجعة طلبك. يرجى الانتظار.',
        select: 'اختر القسم',
        div1: 'البرمجة',
        div2: 'الأمن السيبراني',
        div3: 'التصميم الجرافيكي',
        div4: 'التسويق',
        div5: 'التحدث أمام الجمهور'
      },
      footer: {
        rights: '© 2026 فريق الذئاب. جميع الحقوق محفوظة.',
        motto: 'البقاء للأذكى.'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
