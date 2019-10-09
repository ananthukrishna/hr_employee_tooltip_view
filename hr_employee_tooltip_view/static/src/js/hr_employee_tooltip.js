odoo.define('hr_employee_tooltip_view.hr_employee_tooltip_view', function (require) {
    'use strict';
    
    var basic_fields = require('web.basic_fields');    
    var FieldBinaryImage = basic_fields.FieldBinaryImage;    
    var core = require('web.core');
    var _t = core._t;
    
    var FieldBinaryImage = FieldBinaryImage.include({
        start: function(){
            this._super.apply(this, arguments);
            var self= this;      
            if (self.model === "hr.employee") {
                var tooltip_name =  "";
                if(self.record.data.name){
                    tooltip_name = self.record.data.name;
                }else{
                    tooltip_name = "N/A";
                }

                var tooltip_department =  "";
                if (self.record.data.department_id){
                    tooltip_department = self.record.data.department_id.data.display_name;
                }else{
                    tooltip_department = "N/A";
                }

                var tooltip_title =  "";
                if(self.record.data.job_id){
                    tooltip_title = self.record.data.job_id.data.display_name;
                }else{
                    tooltip_title = "N/A"
                }

                var tooltip_email =  "";
                if(self.record.data.work_email){
                    tooltip_email = self.record.data.work_email;
                }else{
                    tooltip_email = "N/A";
                }

                var tooltip_work_phone =  "";
                if(self.record.data.work_phone){
                    tooltip_work_phone = self.record.data.work_phone;
                }else{
                    tooltip_work_phone = "N/A";
                }
                            
                var tooltip_manager =  "";
                if(self.record.data.parent_id){
                    tooltip_manager = self.record.data.parent_id.data.display_name;
                }else{
                    tooltip_manager = "N/A";
                }
                            
                var tooltip_gender =  "";
                if(self.record.data.gender === 'male'){
                    tooltip_gender = "male.png";
                }else if(self.record.data.gender === 'male'){
                    tooltip_gender = "female.png";
                }else{
                    tooltip_gender = "others.png";
                }

                var tooltip_age =  "";
                if(self.record.data.calculated_age){
                    tooltip_age = self.record.data.calculated_age;
                }else{
                    tooltip_age = "N/A";
                }

                var tooltip_experience =  "";
                if(self.record.data.calculated_experience){
                    tooltip_experience = self.record.data.calculated_experience;
                }else{
                    tooltip_experience = "N/A";
                }

                var tooltip_nbox_rating = '0X0';
                if(self.record.data.nbox_rating === false){
                    tooltip_nbox_rating = '0X0';
                }
                else if (self.record.data.nbox_rating === '0X0') {
                    tooltip_nbox_rating = '0X0';
                } 
                else if (self.record.data.nbox_rating === '0X1') {
                    tooltip_nbox_rating = '0X0';
                } 
                else if (self.record.data.nbox_rating === '0X2') {
                    tooltip_nbox_rating = '0X0';
                } 
                else if (self.record.data.nbox_rating === '0X3') {
                    tooltip_nbox_rating = '0X0';
                } 
                else if (self.record.data.nbox_rating === '1X0') {
                    tooltip_nbox_rating = '0X0';
                } 
                else if (self.record.data.nbox_rating === '2X0') {
                    tooltip_nbox_rating = '0X0';
                } 
                else if (self.record.data.nbox_rating ==='3X0') {
                    tooltip_nbox_rating = '0X0';
                } 
                else {
                    tooltip_nbox_rating = self.record.data.nbox_rating;
                }


                var tooltip_country_flag =  "";
                if(self.record.data.country_id){
                    var country_name = (self.record.data.country_id.data.display_name).toLowerCase();
                    var flag = country_name.replace(/\s+/g, '_')+'.gif';
                    if (flag){
                        tooltip_country_flag = flag;
                    }else{
                        tooltip_country_flag = "no_flag.gif";
                    }
                }else{
                    tooltip_country_flag = "no_flag.gif";
                }
    
            

                $(document).ready(function() {
                    var html_tooltip_view = '<div id="hr_employee_tooltip_view" class="sample" style="position:absolute; display:none; z-index:200;"></div>';
                    $("body").prepend(html_tooltip_view);                

                    var html_popup_box = '';        
                    html_popup_box = '<div id="tooltip_container" style="display:none;">';
                    html_popup_box += '<div class="container-fluid tooltip_container">';

                    html_popup_box += '<div class="row margin-zero">';
                    html_popup_box += '<div class="tooltip_name">'+ tooltip_name +'</div>';
                    html_popup_box += '<div class="dep_tit">';
                    html_popup_box += '<span class="department">'+ tooltip_department +'</span>';
                    html_popup_box += '<span class="department">,</span>';
                    html_popup_box += '<span class="title">'+ tooltip_title +'</span>';
                    html_popup_box += '</div>';
                    html_popup_box += '</div>';

                    html_popup_box += '<div class="row margin-zero mt-10">';
                    html_popup_box += '<div class="col-4">';
                    html_popup_box += '<img class="img_avatar" src="/web/image?model=hr.employee&id='+ self.record.data.id +'&field=image"/>';
                    html_popup_box += '</div>';
                    html_popup_box += '<div class="col-1"></div>';
                    html_popup_box += '<div class="col-6">';
                    html_popup_box += '<div class="tooltip_head">E-Mail</div>';
                    html_popup_box += '<div class="tooltip_text">'+ tooltip_email +'</div>';
                    html_popup_box += '<div class="tooltip_head">Phone Number</div>';
                    html_popup_box += '<div class="tooltip_text">'+ tooltip_work_phone +'</div>';
                    html_popup_box += '<div class="tooltip_head">Manager</div>';
                    html_popup_box += '<div class="tooltip_text">'+ tooltip_manager +'</div>';
                    html_popup_box += '</div>';
                    html_popup_box += '</div>';

                    html_popup_box += '<div class="row margin-zero mt-10">';
                    html_popup_box += '<div class="col-6">';
                    html_popup_box += '<div class="tooltip_icon_head text-left">Potential / Performance</div>';
                    html_popup_box += '<div class="tooltip_icon_ninebox"><img class="" src="/hr_employee_tooltip_view/static/src/img/ninebox/'+ tooltip_nbox_rating +'.png"/></div>';
                    html_popup_box += '</div>';       
                    html_popup_box += '<div class="col-3">';
                    html_popup_box += '<div class="tooltip_icon_head text-center">Gender</div>';
                    html_popup_box += '<div class="tooltip_icon_gender"><img class="" src="/hr_employee_tooltip_view/static/src/img/icons/'+ tooltip_gender +'"/></div>';
                    html_popup_box += '<div class="tooltip_icon_head text-center">Nationality</div>';
                    html_popup_box += '<div class="tooltip_icon_flag"><img class="c_flag" src="/hr_employee_tooltip_view/static/src/img/country_flags/'+ tooltip_country_flag +'"/></div>';
                    html_popup_box += '</div>';
                    html_popup_box += '<div class="col-3">';
                    html_popup_box += '<div class="tooltip_icon_head text-center">Age</div>';
                    html_popup_box += '<div class="tooltip_icon_number_g">'+ tooltip_age +'</div>';
                    html_popup_box += '<div class="tooltip_icon_head text-center">Experience</div>';
                    html_popup_box += '<div class="tooltip_icon_number_o">'+ tooltip_experience +'</div>';
                    html_popup_box += '</div>';      
                    html_popup_box += '</div>';

                    html_popup_box += '</div>';
                    html_popup_box += '</div>';

                    $("body").prepend(html_popup_box);

                });
                if (self.mode === "readonly") {
                    this.$('.img').bind('mouseover', function(ev){                    
                        ev.stopPropagation();
                        $(this).addClass('image_mouse_over');
                        var html_popup_box = $( "#tooltip_container" ).html();                
                        this.popupbox= $('#hr_employee_tooltip_view').html(html_popup_box).show();                                
                    });
                    $(document).mouseup(function(ev) { 
                        var html_popup_box = $( "#tooltip_container" ).html();  
                        $('#hr_employee_tooltip_view').html(html_popup_box).hide();
                    });

                }
            }
            
        }
    })

});