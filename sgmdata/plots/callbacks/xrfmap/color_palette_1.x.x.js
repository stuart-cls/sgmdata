var f = cb_obj.value;
if (f == "Viridis") {
    im.glyph.color_mapper.palette = ['#440154', '#440255', '#440357', '#450558', '#45065A', '#45085B', '#46095C', '#460B5E', '#460C5F', '#460E61', '#470F62', '#471163', '#471265', '#471466', '#471567', '#471669', '#47186A', '#48196B', '#481A6C', '#481C6E', '#481D6F', '#481E70', '#482071', '#482172', '#482273', '#482374', '#472575', '#472676', '#472777', '#472878', '#472A79', '#472B7A', '#472C7B', '#462D7C', '#462F7C', '#46307D', '#46317E', '#45327F', '#45347F', '#453580', '#453681', '#443781', '#443982', '#433A83', '#433B83', '#433C84', '#423D84', '#423E85', '#424085', '#414186', '#414286', '#404387', '#404487', '#3F4587', '#3F4788', '#3E4888', '#3E4989', '#3D4A89', '#3D4B89', '#3D4C89', '#3C4D8A', '#3C4E8A', '#3B508A', '#3B518A', '#3A528B', '#3A538B', '#39548B', '#39558B', '#38568B', '#38578C', '#37588C', '#37598C', '#365A8C', '#365B8C', '#355C8C', '#355D8C', '#345E8D', '#345F8D', '#33608D', '#33618D', '#32628D', '#32638D', '#31648D', '#31658D', '#31668D', '#30678D', '#30688D', '#2F698D', '#2F6A8D', '#2E6B8E', '#2E6C8E', '#2E6D8E', '#2D6E8E', '#2D6F8E', '#2C708E', '#2C718E', '#2C728E', '#2B738E', '#2B748E', '#2A758E', '#2A768E', '#2A778E', '#29788E', '#29798E', '#287A8E', '#287A8E', '#287B8E', '#277C8E', '#277D8E', '#277E8E', '#267F8E', '#26808E', '#26818E', '#25828E', '#25838D', '#24848D', '#24858D', '#24868D', '#23878D', '#23888D', '#23898D', '#22898D', '#228A8D', '#228B8D', '#218C8D', '#218D8C', '#218E8C', '#208F8C', '#20908C', '#20918C', '#1F928C', '#1F938B', '#1F948B', '#1F958B', '#1F968B', '#1E978A', '#1E988A', '#1E998A', '#1E998A', '#1E9A89', '#1E9B89', '#1E9C89', '#1E9D88', '#1E9E88', '#1E9F88', '#1EA087', '#1FA187', '#1FA286', '#1FA386', '#20A485', '#20A585', '#21A685', '#21A784', '#22A784', '#23A883', '#23A982', '#24AA82', '#25AB81', '#26AC81', '#27AD80', '#28AE7F', '#29AF7F', '#2AB07E', '#2BB17D', '#2CB17D', '#2EB27C', '#2FB37B', '#30B47A', '#32B57A', '#33B679', '#35B778', '#36B877', '#38B976', '#39B976', '#3BBA75', '#3DBB74', '#3EBC73', '#40BD72', '#42BE71', '#44BE70', '#45BF6F', '#47C06E', '#49C16D', '#4BC26C', '#4DC26B', '#4FC369', '#51C468', '#53C567', '#55C666', '#57C665', '#59C764', '#5BC862', '#5EC961', '#60C960', '#62CA5F', '#64CB5D', '#67CC5C', '#69CC5B', '#6BCD59', '#6DCE58', '#70CE56', '#72CF55', '#74D054', '#77D052', '#79D151', '#7CD24F', '#7ED24E', '#81D34C', '#83D34B', '#86D449', '#88D547', '#8BD546', '#8DD644', '#90D643', '#92D741', '#95D73F', '#97D83E', '#9AD83C', '#9DD93A', '#9FD938', '#A2DA37', '#A5DA35', '#A7DB33', '#AADB32', '#ADDC30', '#AFDC2E', '#B2DD2C', '#B5DD2B', '#B7DD29', '#BADE27', '#BDDE26', '#BFDF24', '#C2DF22', '#C5DF21', '#C7E01F', '#CAE01E', '#CDE01D', '#CFE11C', '#D2E11B', '#D4E11A', '#D7E219', '#DAE218', '#DCE218', '#DFE318', '#E1E318', '#E4E318', '#E7E419', '#E9E419', '#ECE41A', '#EEE51B', '#F1E51C', '#F3E51E', '#F6E61F', '#F8E621', '#FAE622', '#FDE724'];
    cl.color_mapper.palette = ['#440154', '#440255', '#440357', '#450558', '#45065A', '#45085B', '#46095C', '#460B5E', '#460C5F', '#460E61', '#470F62', '#471163', '#471265', '#471466', '#471567', '#471669', '#47186A', '#48196B', '#481A6C', '#481C6E', '#481D6F', '#481E70', '#482071', '#482172', '#482273', '#482374', '#472575', '#472676', '#472777', '#472878', '#472A79', '#472B7A', '#472C7B', '#462D7C', '#462F7C', '#46307D', '#46317E', '#45327F', '#45347F', '#453580', '#453681', '#443781', '#443982', '#433A83', '#433B83', '#433C84', '#423D84', '#423E85', '#424085', '#414186', '#414286', '#404387', '#404487', '#3F4587', '#3F4788', '#3E4888', '#3E4989', '#3D4A89', '#3D4B89', '#3D4C89', '#3C4D8A', '#3C4E8A', '#3B508A', '#3B518A', '#3A528B', '#3A538B', '#39548B', '#39558B', '#38568B', '#38578C', '#37588C', '#37598C', '#365A8C', '#365B8C', '#355C8C', '#355D8C', '#345E8D', '#345F8D', '#33608D', '#33618D', '#32628D', '#32638D', '#31648D', '#31658D', '#31668D', '#30678D', '#30688D', '#2F698D', '#2F6A8D', '#2E6B8E', '#2E6C8E', '#2E6D8E', '#2D6E8E', '#2D6F8E', '#2C708E', '#2C718E', '#2C728E', '#2B738E', '#2B748E', '#2A758E', '#2A768E', '#2A778E', '#29788E', '#29798E', '#287A8E', '#287A8E', '#287B8E', '#277C8E', '#277D8E', '#277E8E', '#267F8E', '#26808E', '#26818E', '#25828E', '#25838D', '#24848D', '#24858D', '#24868D', '#23878D', '#23888D', '#23898D', '#22898D', '#228A8D', '#228B8D', '#218C8D', '#218D8C', '#218E8C', '#208F8C', '#20908C', '#20918C', '#1F928C', '#1F938B', '#1F948B', '#1F958B', '#1F968B', '#1E978A', '#1E988A', '#1E998A', '#1E998A', '#1E9A89', '#1E9B89', '#1E9C89', '#1E9D88', '#1E9E88', '#1E9F88', '#1EA087', '#1FA187', '#1FA286', '#1FA386', '#20A485', '#20A585', '#21A685', '#21A784', '#22A784', '#23A883', '#23A982', '#24AA82', '#25AB81', '#26AC81', '#27AD80', '#28AE7F', '#29AF7F', '#2AB07E', '#2BB17D', '#2CB17D', '#2EB27C', '#2FB37B', '#30B47A', '#32B57A', '#33B679', '#35B778', '#36B877', '#38B976', '#39B976', '#3BBA75', '#3DBB74', '#3EBC73', '#40BD72', '#42BE71', '#44BE70', '#45BF6F', '#47C06E', '#49C16D', '#4BC26C', '#4DC26B', '#4FC369', '#51C468', '#53C567', '#55C666', '#57C665', '#59C764', '#5BC862', '#5EC961', '#60C960', '#62CA5F', '#64CB5D', '#67CC5C', '#69CC5B', '#6BCD59', '#6DCE58', '#70CE56', '#72CF55', '#74D054', '#77D052', '#79D151', '#7CD24F', '#7ED24E', '#81D34C', '#83D34B', '#86D449', '#88D547', '#8BD546', '#8DD644', '#90D643', '#92D741', '#95D73F', '#97D83E', '#9AD83C', '#9DD93A', '#9FD938', '#A2DA37', '#A5DA35', '#A7DB33', '#AADB32', '#ADDC30', '#AFDC2E', '#B2DD2C', '#B5DD2B', '#B7DD29', '#BADE27', '#BDDE26', '#BFDF24', '#C2DF22', '#C5DF21', '#C7E01F', '#CAE01E', '#CDE01D', '#CFE11C', '#D2E11B', '#D4E11A', '#D7E219', '#DAE218', '#DCE218', '#DFE318', '#E1E318', '#E4E318', '#E7E419', '#E9E419', '#ECE41A', '#EEE51B', '#F1E51C', '#F3E51E', '#F6E61F', '#F8E621', '#FAE622', '#FDE724'];
}
if (f == "Spectral") {
    im.glyph.color_mapper.palette = ['#5e4fa2', '#3288bd', '#66c2a5', '#abdda4', '#e6f598', '#ffffbf', '#fee08b', '#fdae61', '#f46d43', '#d53e4f', '#9e0142'];
    cl.color_mapper.palette = ['#5e4fa2', '#3288bd', '#66c2a5', '#abdda4', '#e6f598', '#ffffbf', '#fee08b', '#fdae61', '#f46d43', '#d53e4f', '#9e0142'];
}
if (f == "Inferno") {
    im.glyph.color_mapper.palette = ['#000003', '#000004', '#000006', '#010007', '#010109', '#01010B', '#02010E', '#020210', '#030212', '#040314', '#040316', '#050418', '#06041B', '#07051D', '#08061F', '#090621', '#0A0723', '#0B0726', '#0D0828', '#0E082A', '#0F092D', '#10092F', '#120A32', '#130A34', '#140B36', '#160B39', '#170B3B', '#190B3E', '#1A0B40', '#1C0C43', '#1D0C45', '#1F0C47', '#200C4A', '#220B4C', '#240B4E', '#260B50', '#270B52', '#290B54', '#2B0A56', '#2D0A58', '#2E0A5A', '#300A5C', '#32095D', '#34095F', '#350960', '#370961', '#390962', '#3B0964', '#3C0965', '#3E0966', '#400966', '#410967', '#430A68', '#450A69', '#460A69', '#480B6A', '#4A0B6A', '#4B0C6B', '#4D0C6B', '#4F0D6C', '#500D6C', '#520E6C', '#530E6D', '#550F6D', '#570F6D', '#58106D', '#5A116D', '#5B116E', '#5D126E', '#5F126E', '#60136E', '#62146E', '#63146E', '#65156E', '#66156E', '#68166E', '#6A176E', '#6B176E', '#6D186E', '#6E186E', '#70196E', '#72196D', '#731A6D', '#751B6D', '#761B6D', '#781C6D', '#7A1C6D', '#7B1D6C', '#7D1D6C', '#7E1E6C', '#801F6B', '#811F6B', '#83206B', '#85206A', '#86216A', '#88216A', '#892269', '#8B2269', '#8D2369', '#8E2468', '#902468', '#912567', '#932567', '#952666', '#962666', '#982765', '#992864', '#9B2864', '#9C2963', '#9E2963', '#A02A62', '#A12B61', '#A32B61', '#A42C60', '#A62C5F', '#A72D5F', '#A92E5E', '#AB2E5D', '#AC2F5C', '#AE305B', '#AF315B', '#B1315A', '#B23259', '#B43358', '#B53357', '#B73456', '#B83556', '#BA3655', '#BB3754', '#BD3753', '#BE3852', '#BF3951', '#C13A50', '#C23B4F', '#C43C4E', '#C53D4D', '#C73E4C', '#C83E4B', '#C93F4A', '#CB4049', '#CC4148', '#CD4247', '#CF4446', '#D04544', '#D14643', '#D24742', '#D44841', '#D54940', '#D64A3F', '#D74B3E', '#D94D3D', '#DA4E3B', '#DB4F3A', '#DC5039', '#DD5238', '#DE5337', '#DF5436', '#E05634', '#E25733', '#E35832', '#E45A31', '#E55B30', '#E65C2E', '#E65E2D', '#E75F2C', '#E8612B', '#E9622A', '#EA6428', '#EB6527', '#EC6726', '#ED6825', '#ED6A23', '#EE6C22', '#EF6D21', '#F06F1F', '#F0701E', '#F1721D', '#F2741C', '#F2751A', '#F37719', '#F37918', '#F47A16', '#F57C15', '#F57E14', '#F68012', '#F68111', '#F78310', '#F7850E', '#F8870D', '#F8880C', '#F88A0B', '#F98C09', '#F98E08', '#F99008', '#FA9107', '#FA9306', '#FA9506', '#FA9706', '#FB9906', '#FB9B06', '#FB9D06', '#FB9E07', '#FBA007', '#FBA208', '#FBA40A', '#FBA60B', '#FBA80D', '#FBAA0E', '#FBAC10', '#FBAE12', '#FBB014', '#FBB116', '#FBB318', '#FBB51A', '#FBB71C', '#FBB91E', '#FABB21', '#FABD23', '#FABF25', '#FAC128', '#F9C32A', '#F9C52C', '#F9C72F', '#F8C931', '#F8CB34', '#F8CD37', '#F7CF3A', '#F7D13C', '#F6D33F', '#F6D542', '#F5D745', '#F5D948', '#F4DB4B', '#F4DC4F', '#F3DE52', '#F3E056', '#F3E259', '#F2E45D', '#F2E660', '#F1E864', '#F1E968', '#F1EB6C', '#F1ED70', '#F1EE74', '#F1F079', '#F1F27D', '#F2F381', '#F2F485', '#F3F689', '#F4F78D', '#F5F891', '#F6FA95', '#F7FB99', '#F9FC9D', '#FAFDA0', '#FCFEA4'];
    cl.color_mapper.palette = ['#000003', '#000004', '#000006', '#010007', '#010109', '#01010B', '#02010E', '#020210', '#030212', '#040314', '#040316', '#050418', '#06041B', '#07051D', '#08061F', '#090621', '#0A0723', '#0B0726', '#0D0828', '#0E082A', '#0F092D', '#10092F', '#120A32', '#130A34', '#140B36', '#160B39', '#170B3B', '#190B3E', '#1A0B40', '#1C0C43', '#1D0C45', '#1F0C47', '#200C4A', '#220B4C', '#240B4E', '#260B50', '#270B52', '#290B54', '#2B0A56', '#2D0A58', '#2E0A5A', '#300A5C', '#32095D', '#34095F', '#350960', '#370961', '#390962', '#3B0964', '#3C0965', '#3E0966', '#400966', '#410967', '#430A68', '#450A69', '#460A69', '#480B6A', '#4A0B6A', '#4B0C6B', '#4D0C6B', '#4F0D6C', '#500D6C', '#520E6C', '#530E6D', '#550F6D', '#570F6D', '#58106D', '#5A116D', '#5B116E', '#5D126E', '#5F126E', '#60136E', '#62146E', '#63146E', '#65156E', '#66156E', '#68166E', '#6A176E', '#6B176E', '#6D186E', '#6E186E', '#70196E', '#72196D', '#731A6D', '#751B6D', '#761B6D', '#781C6D', '#7A1C6D', '#7B1D6C', '#7D1D6C', '#7E1E6C', '#801F6B', '#811F6B', '#83206B', '#85206A', '#86216A', '#88216A', '#892269', '#8B2269', '#8D2369', '#8E2468', '#902468', '#912567', '#932567', '#952666', '#962666', '#982765', '#992864', '#9B2864', '#9C2963', '#9E2963', '#A02A62', '#A12B61', '#A32B61', '#A42C60', '#A62C5F', '#A72D5F', '#A92E5E', '#AB2E5D', '#AC2F5C', '#AE305B', '#AF315B', '#B1315A', '#B23259', '#B43358', '#B53357', '#B73456', '#B83556', '#BA3655', '#BB3754', '#BD3753', '#BE3852', '#BF3951', '#C13A50', '#C23B4F', '#C43C4E', '#C53D4D', '#C73E4C', '#C83E4B', '#C93F4A', '#CB4049', '#CC4148', '#CD4247', '#CF4446', '#D04544', '#D14643', '#D24742', '#D44841', '#D54940', '#D64A3F', '#D74B3E', '#D94D3D', '#DA4E3B', '#DB4F3A', '#DC5039', '#DD5238', '#DE5337', '#DF5436', '#E05634', '#E25733', '#E35832', '#E45A31', '#E55B30', '#E65C2E', '#E65E2D', '#E75F2C', '#E8612B', '#E9622A', '#EA6428', '#EB6527', '#EC6726', '#ED6825', '#ED6A23', '#EE6C22', '#EF6D21', '#F06F1F', '#F0701E', '#F1721D', '#F2741C', '#F2751A', '#F37719', '#F37918', '#F47A16', '#F57C15', '#F57E14', '#F68012', '#F68111', '#F78310', '#F7850E', '#F8870D', '#F8880C', '#F88A0B', '#F98C09', '#F98E08', '#F99008', '#FA9107', '#FA9306', '#FA9506', '#FA9706', '#FB9906', '#FB9B06', '#FB9D06', '#FB9E07', '#FBA007', '#FBA208', '#FBA40A', '#FBA60B', '#FBA80D', '#FBAA0E', '#FBAC10', '#FBAE12', '#FBB014', '#FBB116', '#FBB318', '#FBB51A', '#FBB71C', '#FBB91E', '#FABB21', '#FABD23', '#FABF25', '#FAC128', '#F9C32A', '#F9C52C', '#F9C72F', '#F8C931', '#F8CB34', '#F8CD37', '#F7CF3A', '#F7D13C', '#F6D33F', '#F6D542', '#F5D745', '#F5D948', '#F4DB4B', '#F4DC4F', '#F3DE52', '#F3E056', '#F3E259', '#F2E45D', '#F2E660', '#F1E864', '#F1E968', '#F1EB6C', '#F1ED70', '#F1EE74', '#F1F079', '#F1F27D', '#F2F381', '#F2F485', '#F3F689', '#F4F78D', '#F5F891', '#F6FA95', '#F7FB99', '#F9FC9D', '#FAFDA0', '#FCFEA4'];
}