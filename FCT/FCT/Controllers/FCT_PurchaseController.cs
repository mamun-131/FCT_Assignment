using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FCT.Context;
using FCT.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;



/**
 * This is a .NET CORE and Angular app example coded by Md Mamunur Rahman 
 * 
 * @FileName: FCT_PurchaseController.cs
 * @Author Md Mamunur Rahman
 * @Phone: 6474473215
 * @website: http://mamun-portfolio.azurewebsites.net/Default.aspx
 * @Last Update 03-Mar-2020
 * @description: this file is Controller clss file for FCT_Purchase Table
 */

namespace FCT.Controllers
{
    /**  
   * <summary>  
   * This is the FCT_PurchaseController class for controlling CRUD operation with database.  
   * </summary>  
   * @class FCT_PurchaseController  
   */

    [Route("api/")]
    [ApiController]
    public class FCT_PurchaseController : Controller
    {
        //PRIVATE INSTANCE VARIABLE++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        private ApplicationDbContext _context;

        //CONSTRUCTOR++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
        * <summary>
        * This is the Constructor for initialiging the private variables
        * </summary>
        * @Constructor ProductController
        * @param {object ApplicationDbContext} context
        */
        public FCT_PurchaseController(ApplicationDbContext context)
        {
            _context = context;
        }

        //PUBLIC METHODES++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
    * <summary>
    * This is the public method for adding new data.
    * </summary>
    * @method AddPersion
    * @returns {ActionResult<Person>} 
    * @param {object Person} person
    * POST : /api/FCT_Purchase/AddPurchase
    */

        [HttpPost("AddPurchase")]
        public ActionResult<FCT_Purchase> AddPurchase(FCT_Purchase purchase)
        {
            var pourchase1 = new FCT_Purchase()
            {
                id = purchase.id,
                userId = purchase.userId,
                productId = purchase.productId
            };

            try
            {
              //  _context.FCT_Purchase.FromSqlRaw();
                 _context.FCT_Purchase.Add(pourchase1);
                 _context.SaveChanges();
                return Ok(pourchase1);
            }
            catch (Exception)
            {

                return BadRequest();
            }



        }
    }
}