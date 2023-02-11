import React from "react";
import '../../styles/button.scss';
import '../../styles/text.scss';
import '../../styles/App.scss';

// class components
class MyComponent extends React.Component {

    render() {
        let { stt, textEmail, dataLogin } = this.props;
        // props dữ liệu từ khung email vào pass của lớp cha designForm lưu ý phải lấy đúng tên từ thằng cha đã đặt 
        //console.log(dataLogin);
        return (
            <>{stt === true ?
                <div className="renderclass">
                    {
                        dataLogin.map((item, index) => {
                            if (textEmail === item.Email) {
                                return (
                                    <div key={item.id} >
                                        {/*để hạn chế load lại cả trang khi dữ liệu thay đổi thì
                                 js bắt buộc phải có cái key để phân biêt dữ liệu khi thay
                                 đổi dữ liệu thì js chỉ dựa vào cái key này để load lại 
                                 trên interface ,key này chỉ js biết nó ko hiện trong element
                                giúp tối ưu hoá hiệu năng website nhanh hơn
                                */}
                                        {item.name}---{item.age}
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                :
                <div>nhập đúng email</div>
            }
            </>
        );
    }
}
//  cách 2 dùng arrow funtion chứ ko dùng class
// const MyComponent = (props) => {
//     let { dataLogin } = props;
//     return (
//         <>
//             <div className="renderclass">
// {
//     dataLogin.map((item, index) => {
//         return (
//             <div key={item.id} >

//                 Thông tin người dùng: { item.id } --- { item.name }
//             </div >
//         )
//     })
// }
//             </div >
//         </>
//     )
// }

export default MyComponent;