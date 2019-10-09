# -*- coding: utf-8 -*-
###############################################################################
#    License, author and contributors information in:                         #
#    __manifest__.py file at the root folder of this module.                  #
###############################################################################

from odoo import models, fields, api, _
from datetime import datetime, time

class Employee(models.Model):
    _inherit = 'hr.employee'

    calculated_age = fields.Integer(string='Age')
    date_join = fields.Date(string="Date of Joining",)
    calculated_experience = fields.Integer(string='Years of Experience')
    potential = fields.Selection([('0', "0"),('1', "1"), ('2', "2"),('3', "3")],default='0',string='Potential')
    performance = fields.Selection([('0', "0"),('1', "1"), ('2', "2"),('3', "3")],default='0',string='Performance')
    nbox_rating = fields.Char(string='Nine Box Rating',readonly=True,compute='_compute_nbox_rating')


    @api.depends('potential','performance')
    def _compute_nbox_rating(self):
        if self.potential and self.performance:        
            self.nbox_rating = str(self.potential) + "X" + str(self.performance)
    
    @api.onchange('birthday')
    def _compute_age(self):
        if self.birthday:
            today = datetime.today() 
            dob = datetime.strptime(str(self.birthday), '%Y-%m-%d')
            age = ((today - dob).days/365)
            self.calculated_age = age


    @api.onchange('date_join')
    def _compute_experience(self):
        if self.date_join:
            today = datetime.today() 
            doj = datetime.strptime(str(self.date_join), '%Y-%m-%d')
            experience = ((today - doj).days/365)
            self.calculated_experience = experience
            


    
