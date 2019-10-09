
# -*- coding: utf-8 -*-
###############################################################################
#
#    Odoo, Open Source Management Solution
#
#    Copyright (c) All rights reserved:
#        (c) 2015  TM_FULLNAME
#
#    This program is free software: you can redistribute it and/or modify
#    it under the terms of the GNU Affero General Public License as
#    published by the Free Software Foundation, either version 3 of the
#    License, or (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
#    GNU Affero General Public License for more details.
#
#    You should have received a copy of the GNU Affero General Public License
#    along with this program.  If not, see http://www.gnu.org/licenses
#
###############################################################################
{
    'name': 'HR Employee Tooltip View',
    'summary': 'HR Employee Tooltip View',
    'version': '1.0',
    'description': """show tooltip view on hr employee photo while mouseover""",
    'author': 'Ananthu Krishna',
    'maintainer': 'Ananthu Krishna',
    'website': 'http://www.codersfort.com',
    "images": ["images/Banner.png"],
    'license': 'OPL-1',
    'category': 'hr',
    'depends': [
        'base','hr'
    ],
    'data': [
        'views/assets.xml',
        'views/hr_employee_views.xml'
    ],
    'qweb': [],
    "installable": True,
    "application": True,
    "pre_init_hook":  "pre_init_check",    
}