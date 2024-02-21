
import DashboardIcon from '@mui/icons-material/Dashboard';
import PhonePausedIcon from '@mui/icons-material/PhonePaused';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import QualificatifPage from '../pages/Admin/qualificatif';
import QuestionPage from '../pages/Admin/question';
export default function(){
    const data=[
        {
            id:0,
            label:"Dashboard",
            img:<DashboardIcon/>,
            path:"/dashboard/admin"

        },
        
        {
            id:1,
            label:"Contact",
            img:<PhonePausedIcon/>,
            component:<QualificatifPage/>,
            path:"/qualificatif"

        },
        {
            id:2,
            label:"Subscription",
            img:<SubscriptionsIcon/>,
            component:<QuestionPage/>,
            path:"/question"

        }
    ]
    return data
}

// export default data
