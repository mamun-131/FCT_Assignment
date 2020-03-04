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
 * @FileName: ProductController.cs
 * @Author Md Mamunur Rahman
 * @Phone: 6474473215
 * @website: http://mamun-portfolio.azurewebsites.net/Default.aspx
 * @Last Update 03-Mar-2020
 * @description: this file is Controller clss file for Product Table
 */

namespace FCT.Controllers
{
    /**  
   * <summary>  
   * This is the ProductController class for controlling CRUD operation with database.  
   * </summary>  
   * @class ProductController  
   */

    [Route("api/")]
    [ApiController]
    public class ProductController : Controller
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
        public ProductController(ApplicationDbContext context)
        {
            _context = context;
        }

        //PUBLIC METHODES++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
        * <summary>
        * This is the public method for making query for all products
        * </summary>
        * @method GetAllProducts
        * @returns {IEnumerable<Product>} 
        */
        [HttpGet("GetAllProducts")]
        public IEnumerable<Product> GetAllProducts()
        {
            try
            {
                return _context.product.FromSqlRaw($"SELECT * FROM FCT_Product").ToList();
            }
            catch (Exception)
            {

                return null;
            }

        }

    }
}